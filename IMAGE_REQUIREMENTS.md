# Alachi Hotel - Image Requirements

## 📋 REQUIRED IMAGES CHECKLIST

This document lists ALL images needed for the website. Place them in `/public/images/source/` with the exact filenames below.

---

### **HOMEPAGE** (5 images)
- [ ] `hero-home.jpg` (1920x1080) - Main hero image: pool or exterior view
- [ ] `urlachi-farm.jpg` (800x600) - Organic farm breakfast feature
- [ ] `spa-hamam.jpg` (800x600) - Turkish bath/spa area
- [ ] `alacati-streets.jpg` (800x600) - Historic Alaçatı streets nearby
- [ ] `pool-evening.jpg` (800x600) - Pool at sunset/evening

---

### **ROOMS PAGE** (15 images - 2 per room type + 1 hero)
- [ ] `rooms/hero-rooms.jpg` (1920x1080) - Rooms page hero
- [ ] `rooms/standard-ground-1.jpg` (800x600) - Standard Room Ground Floor
- [ ] `rooms/standard-ground-2.jpg` (800x600) - Standard Room Ground Floor (alternate angle)
- [ ] `rooms/standard-lower-1.jpg` (800x600) - Standard Room Lower Floor
- [ ] `rooms/standard-lower-2.jpg` (800x600) - Standard Room Lower Floor (alternate)
- [ ] `rooms/deluxe-1.jpg` (800x600) - Deluxe Room
- [ ] `rooms/deluxe-2.jpg` (800x600) - Deluxe Room (alternate)
- [ ] `rooms/deluxe-pool-1.jpg` (800x600) - Deluxe Room with Pool View
- [ ] `rooms/deluxe-pool-2.jpg` (800x600) - Deluxe Room with Pool View (alternate)
- [ ] `rooms/bay-window-1.jpg` (800x600) - Room with Bay Window (cumbalı)
- [ ] `rooms/bay-window-2.jpg` (800x600) - Bay Window Room (alternate)
- [ ] `rooms/superior-1.jpg` (800x600) - Superior Double Room
- [ ] `rooms/superior-2.jpg` (800x600) - Superior Double Room (alternate)
- [ ] `rooms/superior-hamam-1.jpg` (800x600) - Superior with Turkish Bath
- [ ] `rooms/superior-hamam-2.jpg` (800x600) - Superior with Turkish Bath (in-room hamam detail)

---

### **AMENITIES PAGE** (8 images)
- [ ] `amenities/hero-amenities.jpg` (1920x1080) - Amenities hero
- [ ] `amenities/hamam.jpg` (800x600) - Turkish bath interior
- [ ] `amenities/spa.jpg` (800x600) - Spa treatment area
- [ ] `amenities/pool.jpg` (800x600) - Swimming pool
- [ ] `amenities/breakfast.jpg` (800x600) - Breakfast spread
- [ ] `amenities/garden.jpg` (800x600) - Hotel garden
- [ ] `amenities/fireplace.jpg` (800x600) - Winter fireplace lounge
- [ ] `amenities/urlachi-farm.jpg` (800x600) - Urlachi organic farm

---

### **LOCATION PAGE** (6 images)
- [ ] `location/hero-location.jpg` (1920x1080) - Aerial or map view
- [ ] `location/alacati-center.jpg` (800x600) - Alaçatı town center (2 min walk)
- [ ] `location/beach.jpg` (800x600) - Nearby beach
- [ ] `location/windsurf.jpg` (800x600) - Windsurfing activity
- [ ] `location/vineyards.jpg` (800x600) - Local vineyards/wine tourism
- [ ] `location/historical-sites.jpg` (800x600) - Eski Foça or nearby ruins

---

### **CONTACT PAGE** (1 image)
- [ ] `contact/hero-contact.jpg` (1920x1080) - Hotel exterior or entrance

---

## 📝 IMAGE NAMING CONVENTIONS

**Rules**:
1. Use lowercase letters only
2. Use hyphens (not underscores) to separate words
3. Include descriptive keywords (e.g., `superior-hamam-bathroom.jpg` not `IMG_1234.jpg`)
4. Use subfolder organization (rooms/, amenities/, location/)
5. Recommended format: JPEG (PNG only if transparency needed)
6. Recommended dimensions:
   - Hero images: 1920x1080 (16:9)
   - Feature images: 800x600 (4:3)
   - Detail shots: 600x800 (3:4 portrait OK)

---

## 🚀 WORKFLOW WHEN YOU PROVIDE IMAGES

1. **Place photos** in `/public/images/source/` following the folder structure above
2. **Run optimization**: `npm run optimize-images`
   - Script will generate WebP and AVIF versions
   - Creates blur placeholders
   - Outputs manifest at `/public/images/image-manifest.json`
3. **Build site**: `npm run build`
   - Automatically runs optimization (via `prebuild` hook)
   - Creates static export in `/out/` folder
4. **Upload to DirectAdmin**: Upload entire `/out/` folder contents

---

## ⚠️ IMPORTANT NOTES

- **DO NOT** edit files in `/public/images/optimized/` - these are auto-generated
- **DO NOT** commit optimized images to Git - they're in `.gitignore`
- **DO** keep original high-quality photos in `/source/` as your master files
- If you update a photo, just replace it in `/source/` and rebuild

---

## 📊 EXPECTED PERFORMANCE

With 35 images (hero + rooms + amenities + location):
- Original JPEGs: ~35 × 3MB = **105 MB**
- After WebP optimization: ~35 × 800KB = **28 MB** (73% reduction)
- After AVIF optimization: ~35 × 600KB = **21 MB** (80% reduction)

Target LCP: **< 2.5 seconds** on mobile with blur placeholders
