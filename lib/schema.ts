export const HOTEL_INFO = {
    name: "Alachi Hotel",
    description: "Experience authentic Alaçatı at Alachi Hotel. Feng Shui design, organic breakfast from Urlachi Farm, Turkish Hamam, traditional stone architecture.",
    url: "https://alachihotel.com",
    logo: "https://alachihotel.com/logo.png", // Placeholder
    image: "https://alachihotel.com/hero.jpg",
    telephone: "+90 232 716 66 66",
    email: "info@alachihotel.com",
    address: {
        streetAddress: "Alaçatı Mahallesi, 11000 Sokak No:1", // Validated placeholder street
        addressLocality: "Çeşme",
        addressRegion: "İzmir",
        postalCode: "35930",
        addressCountry: "TR"
    },
    geo: {
        latitude: 38.297500,
        longitude: 26.371100
    },
    priceRange: "$$",
    checkIn: "14:00",
    checkOut: "12:00",
    sameAs: [
        "https://www.instagram.com/alachihotelalacati/?hl=en",
        "https://www.facebook.com/alachihotel",
        "https://www.tripadvisor.com/Hotel_Review-g1024116-d14025674-Reviews-Alachi_Hotel-Alacati_Cesme_Izmir_Province_Turkish_Aegean_Coast.html"
    ]
};

export function generateHotelSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": HOTEL_INFO.name,
        "description": HOTEL_INFO.description,
        "image": [HOTEL_INFO.image],
        "url": HOTEL_INFO.url,
        "telephone": HOTEL_INFO.telephone,
        "email": HOTEL_INFO.email,
        "address": {
            "@type": "PostalAddress",
            ...HOTEL_INFO.address
        },
        "geo": {
            "@type": "GeoCoordinates",
            ...HOTEL_INFO.geo
        },
        "starRating": {
            "@type": "Rating",
            "ratingValue": "4.8" // Placeholder until real reviews
        },
        "priceRange": HOTEL_INFO.priceRange,
        "checkinTime": HOTEL_INFO.checkIn,
        "checkoutTime": HOTEL_INFO.checkOut,
        "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Outdoor Pool", "value": "True" },
            { "@type": "LocationFeatureSpecification", "name": "Turkish Hamam", "value": "True" },
            { "@type": "LocationFeatureSpecification", "name": "SPA Services", "value": "True" },
            { "@type": "LocationFeatureSpecification", "name": "Organic Breakfast", "value": "True" },
            { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": "True" },
            { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": "True" }
        ],
        "sameAs": HOTEL_INFO.sameAs
    };
}

export function generateRoomSchema(room: { name: string; description: string; image?: string; occupancy?: number }) {
    return {
        "@context": "https://schema.org",
        "@type": "HotelRoom",
        "name": room.name,
        "description": room.description,
        "image": room.image || HOTEL_INFO.image,
        "occupancy": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": room.occupancy || 2
        },
        "bed": {
            "@type": "BedDetails",
            "numberOfBeds": 1
        }
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url.startsWith('http') ? item.url : `${HOTEL_INFO.url}${item.url}`
        }))
    };
}

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": HOTEL_INFO.name,
        "image": HOTEL_INFO.image,
        "telephone": HOTEL_INFO.telephone,
        "email": HOTEL_INFO.email,
        "address": {
            "@type": "PostalAddress",
            ...HOTEL_INFO.address
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "paymentAccepted": "Cash, Credit Card, Visa, Mastercard",
        "priceRange": HOTEL_INFO.priceRange
    };
}

export function generateEventSchema(event: { name: string; description: string; startDate: string; endDate: string; location?: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": event.name,
        "description": event.description,
        "startDate": event.startDate,
        "endDate": event.endDate,
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
            "@type": "Place",
            "name": event.location || "Alaçatı, İzmir",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Alaçatı",
                "addressRegion": "İzmir",
                "addressCountry": "TR"
            }
        }
    };
}
