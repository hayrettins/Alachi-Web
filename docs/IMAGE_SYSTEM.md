# Image System Documentation

## Overview

This project uses a **build-time image optimization system** that converts photos to modern formats (WebP, AVIF) with blur placeholders, achieving 60-80% size reduction.

## How It Works

[User places photos] [Build time] [Runtime] ↓ ↓ ↓ /images/source/ → optimize script → hero.jpg generates: renders - hero.webp with blur-up - hero.avif - blur placeholder


## Using the OptimizedImage Component

### Basic Usage
```tsx
import OptimizedImage from '@/components/OptimizedImage';

<OptimizedImage
  src="rooms/deluxe.jpg"
  alt="Deluxe room with pool view"
  className="w-full h-64 rounded-lg"
/>
```

### Above-Fold Images (Hero Sections)
```tsx
<OptimizedImage
  src="hero-home.jpg"
  alt="Alachi Hotel pool and garden"
  priority={true}  // Loads immediately, no lazy loading
  className="w-full h-screen object-cover"
/>
```

### With Specific Dimensions
```tsx
<OptimizedImage
  src="amenities/hamam.jpg"
  alt="Traditional Turkish bath"
  width={800}
  height={600}
  className="rounded-md shadow-lg"
/>
```

### Adding New Images
1. Place photo in `/public/images/source/` (use subfolders: `rooms/`, `amenities/`, etc.)
2. Follow naming convention: `descriptive-name.jpg` (lowercase, hyphens)
3. Run `npm run build` (automatically optimizes images)
4. Use in component: `<OptimizedImage src="your-image.jpg" ... />`

### File Structure
```
public/images/
├── source/              ← Place your original photos here
│   ├── hero-home.jpg
│   ├── rooms/
│   │   ├── deluxe.jpg
│   │   └── superior.jpg
│   └── amenities/
│       └── hamam.jpg
├── optimized/           ← Auto-generated (don't edit)
│   ├── webp/
│   ├── avif/
└── image-manifest.json  ← Auto-generated metadata
```

### Performance
- **WebP**: 85 quality, ~73% smaller than JPEG
- **AVIF**: 80 quality, ~80% smaller than JPEG
- **Blur placeholder**: Tiny base64 image shown while loading
- **Lazy loading**: Images below fold load only when scrolled into view
- **Format selection**: Browser automatically picks best format it supports

### Troubleshooting

**Issue: "Image not found in manifest"**
Solution: Run `npm run optimize-images` to regenerate manifest

**Issue: Images look blurry**
Solution: Check original photo quality in `/source/` folder

**Issue: Build fails with sharp error**
Solution: Delete `node_modules`, run `npm install` again
