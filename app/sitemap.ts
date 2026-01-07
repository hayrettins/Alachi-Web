import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://alachihotel.com';
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    tr: `${baseUrl}/tr`,
                },
            },
        },
        {
            url: `${baseUrl}/rooms`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${baseUrl}/en/rooms`,
                    tr: `${baseUrl}/tr/rooms`,
                },
            },
        },
        {
            url: `${baseUrl}/dining`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${baseUrl}/en/dining`,
                    tr: `${baseUrl}/tr/dining`,
                },
            },
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${baseUrl}/en/contact`,
                    tr: `${baseUrl}/tr/contact`,
                },
            },
        },
    ];
}
