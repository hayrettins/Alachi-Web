// scripts/generate-placeholders.mjs
import sharp from 'sharp';
import fs from 'fs/promises';

const PLACEHOLDERS = [
    { name: 'hero-home.jpg', width: 1920, height: 1080, color: '#2C5F7C', text: 'Alachi Hotel' },
    { name: 'hero.jpg', width: 1920, height: 1080, color: '#2C5F7C', text: 'Alachi Hero (Fallback)' },
    { name: 'rooms/hero-rooms.jpg', width: 1920, height: 1080, color: '#4A5568', text: 'Rooms' },
    { name: 'rooms/standard-ground-1.jpg', width: 800, height: 600, color: '#6B7280', text: 'Standard Room' },
    { name: 'amenities/hero-amenities.jpg', width: 1920, height: 1080, color: '#059669', text: 'Amenities' },
    { name: 'amenities/hamam.jpg', width: 800, height: 600, color: '#0891B2', text: 'Turkish Bath' },
    { name: 'location/hero-location.jpg', width: 1920, height: 1080, color: '#7C3AED', text: 'Location' },
];

async function generatePlaceholder({ name, width, height, color, text }) {
    const outputPath = `./public/images/source/${name}`;
    const dir = outputPath.substring(0, outputPath.lastIndexOf('/'));

    await fs.mkdir(dir, { recursive: true });

    // Create SVG text overlay
    const svg = `
    <svg width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill="${color}"/>
      <text x="50%" y="50%" text-anchor="middle" font-size="48" fill="white" font-family="Arial">
        ${text}
      </text>
      <text x="50%" y="55%" text-anchor="middle" font-size="24" fill="rgba(255,255,255,0.7)" font-family="Arial">
        ${width}×${height}
      </text>
    </svg>
  `;

    await sharp(Buffer.from(svg))
        .jpeg({ quality: 90 })
        .toFile(outputPath);

    console.log(`✓ Created ${name}`);
}

async function generateAllPlaceholders() {
    console.log('🎨 Generating placeholder images...\n');

    for (const placeholder of PLACEHOLDERS) {
        await generatePlaceholder(placeholder);
    }

    console.log('\n✅ Placeholders generated in /public/images/source/');
    console.log('   Run "npm run optimize-images" to process them.');
}

generateAllPlaceholders().catch(console.error);
