// scripts/optimize-images.mjs
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

const CONFIG = {
    sourceDir: './public/images/source',
    outputDir: './public/images/optimized',
    manifestPath: './public/images/image-manifest.json',
    webpQuality: 90,
    avifQuality: 85,
    maxWidth: 2560,
    maxHeight: 2560,
    blurWidth: 20,
    blurQuality: 40,
    supportedFormats: ['.jpg', '.jpeg', '.png']
};

async function ensureDirectories() {
    await fs.mkdir(`${CONFIG.outputDir}/webp`, { recursive: true });
    await fs.mkdir(`${CONFIG.outputDir}/avif`, { recursive: true });
    console.log('✓ Output directories ready');
}

async function generateBlurPlaceholder(inputPath) {
    try {
        const buffer = await sharp(inputPath)
            .resize(CONFIG.blurWidth, null, { fit: 'inside' })
            .webp({ quality: CONFIG.blurQuality })
            .toBuffer();
        return `data:image/webp;base64,${buffer.toString('base64')}`;
    } catch (error) {
        console.error(`Error generating blur for ${inputPath}:`, error.message);
        return null;
    }
}

async function getImageMetadata(inputPath) {
    const metadata = await sharp(inputPath).metadata();
    return {
        width: metadata.width,
        height: metadata.height,
        format: metadata.format,
        aspectRatio: (metadata.width / metadata.height).toFixed(2)
    };
}

async function optimizeImage(inputPath) {
    const ext = path.extname(inputPath);
    const fileName = path.basename(inputPath, ext);
    const relativePath = path.relative(CONFIG.sourceDir, inputPath);
    const relativeDir = path.dirname(relativePath);

    console.log(`\nProcessing: ${relativePath}`);

    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;
    const metadata = await getImageMetadata(inputPath);
    const blurDataURL = await generateBlurPlaceholder(inputPath);

    // Create subdirectories
    const webpDir = path.join(CONFIG.outputDir, 'webp', relativeDir);
    const avifDir = path.join(CONFIG.outputDir, 'avif', relativeDir);
    await fs.mkdir(webpDir, { recursive: true });
    await fs.mkdir(avifDir, { recursive: true });

    const webpPath = path.join(webpDir, `${fileName}.webp`);
    const avifPath = path.join(avifDir, `${fileName}.avif`);

    // Determine if it's a logo or certificate (needs higher detail, less compression)
    const isLogoOrCert = inputPath.includes('logos') || inputPath.includes('certificates');
    const qualityModifier = isLogoOrCert ? 100 : CONFIG.webpQuality;
    const avifQualityModifier = isLogoOrCert ? 95 : CONFIG.avifQuality;

    // WebP
    let webpPipeline = sharp(inputPath);
    if (!isLogoOrCert) {
        webpPipeline = webpPipeline.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
            fit: 'inside',
            withoutEnlargement: true
        });
    }
    await webpPipeline
        .webp({ quality: qualityModifier, lossless: isLogoOrCert })
        .toFile(webpPath);

    const webpSize = (await fs.stat(webpPath)).size;

    // AVIF
    let avifPipeline = sharp(inputPath);
    if (!isLogoOrCert) {
        avifPipeline = avifPipeline.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
            fit: 'inside',
            withoutEnlargement: true
        });
    }
    await avifPipeline
        .avif({ quality: avifQualityModifier, lossless: isLogoOrCert })
        .toFile(avifPath);

    const avifSize = (await fs.stat(avifPath)).size;

    // Log stats
    const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    const avifSavings = ((originalSize - avifSize) / originalSize * 100).toFixed(1);

    console.log(`  Original: ${(originalSize / 1024).toFixed(0)} KB`);
    console.log(`  WebP: ${(webpSize / 1024).toFixed(0)} KB (${webpSavings}% smaller)`);
    console.log(`  AVIF: ${(avifSize / 1024).toFixed(0)} KB (${avifSavings}% smaller)`);

    return {
        [relativePath]: {
            original: `/images/source/${relativePath}`,
            webp: `/images/optimized/webp/${relativeDir !== '.' ? relativeDir + '/' : ''}${fileName}.webp`.replace(/\/+/g, '/'),
            avif: `/images/optimized/avif/${relativeDir !== '.' ? relativeDir + '/' : ''}${fileName}.avif`.replace(/\/+/g, '/'),
            blur: blurDataURL,
            width: metadata.width,
            height: metadata.height,
            aspectRatio: metadata.aspectRatio,
            originalSize,
            webpSize,
            avifSize
        }
    };
}

async function optimizeAllImages() {
    console.log('🖼️  Starting image optimization...\n');

    await ensureDirectories();

    const pattern = `${CONFIG.sourceDir}/**/*.{jpg,jpeg,png}`;
    const images = await glob(pattern, { nodir: true });

    if (images.length === 0) {
        console.log('⚠️  No images found in source directory');
        console.log(`   Place your photos in: ${CONFIG.sourceDir}`);
        console.log('   Then run: npm run optimize-images\n');
        await fs.writeFile(CONFIG.manifestPath, JSON.stringify({}, null, 2));
        return;
    }

    console.log(`Found ${images.length} images to optimize\n`);

    const manifest = {};
    for (const imagePath of images) {
        try {
            const entry = await optimizeImage(imagePath);
            Object.assign(manifest, entry);
        } catch (error) {
            console.error(`❌ Error processing ${imagePath}:`, error.message);
        }
    }

    await fs.writeFile(CONFIG.manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`\n✅ Optimization complete!`);

    // Summary
    const totalOriginal = Object.values(manifest).reduce((sum, img) => sum + img.originalSize, 0);
    const totalWebp = Object.values(manifest).reduce((sum, img) => sum + img.webpSize, 0);
    const totalAvif = Object.values(manifest).reduce((sum, img) => sum + img.avifSize, 0);

    if (totalOriginal > 0) {
        console.log('\n📊 Summary:');
        console.log(`   Images processed: ${Object.keys(manifest).length}`);
        console.log(`   Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
        console.log(`   WebP total: ${(totalWebp / 1024 / 1024).toFixed(2)} MB (${((totalOriginal - totalWebp) / totalOriginal * 100).toFixed(1)}% reduction)`);
        console.log(`   AVIF total: ${(totalAvif / 1024 / 1024).toFixed(2)} MB (${((totalOriginal - totalAvif) / totalOriginal * 100).toFixed(1)}% reduction)`);
    }
}

optimizeAllImages().catch(console.error);
