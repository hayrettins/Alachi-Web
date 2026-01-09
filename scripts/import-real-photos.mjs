import fs from 'fs/promises';
import path from 'path';

const SOURCE_ROOT = './alachi-photos-web';
const DEST_ROOT = './public/images/source';

const MAPPING = {
    // Rooms
    'Rooms/Standard-Room/standart_oda-img-1.jpg': 'rooms/standard-ground-1.jpg',
    'Rooms/Standard-Room/standart_oda-img-2.jpg': 'rooms/standard-ground-2.jpg',
    'Rooms/Standard-Room-Lower-Floor/standart-oda-alt-kat-img-1-1024x682.jpg': 'rooms/standard-lower-1.jpg',
    'Rooms/Standard-Room-Lower-Floor/standart-oda-alt-kat-img-2-1024x682.jpg': 'rooms/standard-lower-2.jpg',
    'Rooms/Deluxe-Room/1-deluks_oda-img-10.jpg': 'rooms/deluxe-1.jpg',
    'Rooms/Deluxe-Room/2-deluks_oda-img-3.jpg': 'rooms/deluxe-2.jpg',
    'Rooms/Deluxe-Room-With-Pool-View/1-havuz-manzarali-deluks-oda-img-2.jpg': 'rooms/deluxe-pool-1.jpg',
    'Rooms/Deluxe-Room-With-Pool-View/2-havuz-manzarali-deluks-oda-img-9.jpg': 'rooms/deluxe-pool-2.jpg',
    'Rooms/Double-Room-With-Bay-Window/1-cumbali-cift-kisilik-oda-img-9.jpg': 'rooms/bay-window-1.jpg',
    'Rooms/Double-Room-With-Bay-Window/2-cumbali-cift-kisilik-oda-img-11.jpg': 'rooms/bay-window-2.jpg',
    'Rooms/Superior-Double-Room/1-superior-cift-kisilik-oda-img-3.jpg': 'rooms/superior-1.jpg',
    'Rooms/Superior-Double-Room/2-superior-cift-kisilik-oda-img-10.jpg': 'rooms/superior-2.jpg',
    'Rooms/Superior Room with Turkish Bath & Pool View/1-turk-hamamli-oda-img-4.jpg': 'rooms/superior-hamam-1.jpg',
    'Rooms/Superior Room with Turkish Bath & Pool View/IMG_2916.jpg': 'rooms/superior-hamam-2.jpg',
    'Rooms/Superior Room with Turkish Bath & Pool View/IMG_2920.jpg': 'rooms/hero-rooms.jpg',

    // Outdoor/Pool
    'Outdoor-Pool/havuz.jpg': 'hero-home.jpg',
    'Outdoor-Pool/IMG_526bahçe.jpg': 'amenities/pool.jpg',
    'Outdoor-Pool/genel_yeni_img-2-4.jpg': 'amenities/hero-amenities.jpg',
    'Outdoor-Pool/genel_yeni_img-2-2.jpg': 'pool-evening.jpg',

    // Spa
    'Spa/03-2.jpg': 'amenities/hamam.jpg',
    'Spa/04-3.jpg': 'amenities/spa.jpg',
    'Spa/07-1.jpg': 'spa-hamam.jpg',

    // Breakfast
    'Breakfast/Alachi_Hotel_12-1.jpg': 'amenities/breakfast.jpg',
    'Breakfast/genel_yeni_img-2-3.jpg': 'urlachi-farm.jpg',
    'Breakfast/genel_yeni_img-2-3.jpg': 'amenities/urlachi-farm.jpg', // Duplicate source ok

    // Exterior/Lobby
    'Outside-building-view/Alachi_Hotel_10.jpg': 'location/hero-location.jpg',
    'Outside-building-view/Alachi_Hotel_03.jpg': 'contact/hero-contact.jpg',
    'Outside-building-view/Alachi_Hotel_06-1.jpg': 'alacati-streets.jpg',
    'Outside-building-view/genel_yeni_img-2-12.jpg': 'amenities/garden.jpg',
    'Lobby/01-2.jpg': 'amenities/lobby-main.jpg',
    'Lobby/Alachi_Hotel_01-1.jpg': 'amenities/lobby-entrance.jpg',

    // Logos & Certificates
    'logos:cerificates/Alachi-Web-Logo.png': 'logos/logo.png',
    'logos:cerificates/Logo-Tree(to be used as ico).png': 'logos/favicon-source.png',
    'logos:cerificates/2020-travellers-choice.png': 'certificates/tripadvisor.png',
    'logos:cerificates/SafeTourismTR.png': 'certificates/safe-tourism.png'
};

async function importPhotos() {
    console.log('📸 Starting photo import...');

    // Ensure dirs exist
    const dirs = [
        'rooms', 'amenities', 'location', 'contact', 'logos', 'certificates'
    ];
    for (const d of dirs) {
        await fs.mkdir(path.join(DEST_ROOT, d), { recursive: true });
    }

    let successCount = 0;
    let errorCount = 0;

    for (const [srcRel, destRel] of Object.entries(MAPPING)) {
        const srcPath = path.join(SOURCE_ROOT, srcRel);
        const destPath = path.join(DEST_ROOT, destRel);

        try {
            await fs.copyFile(srcPath, destPath);
            console.log(`✅ Imported: ${destRel}`);
            successCount++;
        } catch (error) {
            console.error(`❌ Failed to import ${srcRel}: ${error.message}`);
            errorCount++;
        }
    }

    console.log(`\nImport complete. Success: ${successCount}, Errors: ${errorCount}`);
    console.log('Now run: npm run optimize-images');
}

importPhotos().catch(console.error);
