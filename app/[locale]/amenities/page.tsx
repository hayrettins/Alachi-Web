import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { BookingButton } from '@/components/ui/BookingButton';
import { generateHotelSchema, generateBreadcrumbSchema } from '@/lib/schema';
import {
    Waves,
    Wind,
    Sparkles,
    Coffee,
    TreePine,
    Wifi,
    Car,
    Utensils,
    Check
} from 'lucide-react';

export default function AmenitiesPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('Amenities');

    const amenitiesList = [
        {
            key: 'pool',
            icon: Waves,
            features: ['Sun Loungers', 'Pool Bar Service', 'Towels Provided', 'Daily Maintenance'] // Specific features could be translated too if added to JSON
        },
        {
            key: 'hamam',
            icon: Wind,
            features: ['Traditional Scrub', 'Foam Massage', 'Private Sessions', 'Relaxation Area']
        },
        {
            key: 'spa',
            icon: Sparkles,
            features: ['Aromatherapy', 'Deep Tissue Massage', 'Organic Oils', 'Couple Treatments']
        },
        {
            key: 'breakfast',
            icon: Coffee,
            features: ['Organic Produce', 'Home-made Jams', 'Fresh Sourdough', 'Local Cheeses']
        },
        {
            key: 'garden',
            icon: TreePine,
            features: ['Bougainvillea', 'Seating Areas', 'Night Lighting', 'Tranquil Atmosphere']
        },
        {
            key: 'parking',
            icon: Car,
            features: ['Secure Area', 'Valet Service', '24/7 Access', 'Free for Guests']
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/hero.jpg" // Fallback to hero for now as instructed (placeholders)
                    alt="Alachi Amenities"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-widest drop-shadow-lg backdrop-blur-sm bg-white/10 p-4 rounded-lg inline-block">
                        {t('title')}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl font-light tracking-wide drop-shadow-md text-balance">
                        Designed with Feng Shui principles for your ultimate relaxation
                    </p>
                </div>
            </div>

            {/* Breadcrumb Schema (JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Amenities', url: '/amenities' }
                    ]))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateHotelSchema())
                }}
            />

            {/* Amenities Grid */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {amenitiesList.map((amenity) => {
                        const Icon = amenity.icon;
                        return (
                            <div key={amenity.key} className="group relative bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                {/* Image Area */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src="/hero.jpg" // Using hero placeholder for all until images available
                                        alt={t(`${amenity.key}.title`)}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg">
                                        <Icon className="w-6 h-6 text-slate-900" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">{t(`${amenity.key}.title`)}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {t(`${amenity.key}.description`)}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3">
                                        {amenity.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-slate-500">
                                                <Check className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Info Section */}
                <div className="mt-24 bg-teal-900/5 p-12 rounded-2xl text-center">
                    <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6">Experience True Serenity</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                        Every detail at Alachi Hotel is curated to provide a peaceful escape from the ordinary.
                        From our organic breakfast to our relaxing spa treatments, we invite you to unwind.
                    </p>
                    <BookingButton className="inline-block px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors rounded-lg shadow-lg">
                        Book Your Stay
                    </BookingButton>
                </div>
            </div>
        </div>
    );
}
