import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { BookingButton } from '@/components/ui/BookingButton';
import { generateRoomSchema, generateBreadcrumbSchema } from '@/lib/schema';
import {
    Users,
    Maximize,
    Check,
    Clock,
    Cigarette,
    Dog,
    Baby,
    BedDouble,
    Wifi,
    Coffee,
    Car,
    Wind,
    Waves,
    Utensils,
    Droplets,
    ShieldCheck,
    Tv,
    LayoutGrid,
    Bath
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Rooms.meta' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function RoomsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Rooms');

    const roomIds = [
        'standardGround',
        'standardLower',
        'deluxe',
        'deluxePoolView',
        'bayWindow',
        'superior',
        'superiorHamam'
    ];

    const policies = [
        { key: 'checkIn', icon: Clock },
        { key: 'checkOut', icon: Clock },
        { key: 'ageRestriction', icon: Users },
        { key: 'smoking', icon: Cigarette },
        { key: 'pets', icon: Dog },
        { key: 'extraBed', icon: BedDouble },
        { key: 'parking', icon: Car },
    ];

    const included = [
        { key: 'breakfast', icon: Utensils },
        { key: 'teaCoffee', icon: Coffee },
        { key: 'water', icon: Droplets },
        { key: 'vat', icon: Check },
    ];

    const commonAmenities = [
        { key: 0, icon: Wifi },
        { key: 1, icon: Tv },
        { key: 2, icon: Utensils },
        { key: 3, icon: Coffee },
        { key: 4, icon: ShieldCheck },
        { key: 5, icon: Bath },
        { key: 6, icon: Wind },
        { key: 7, icon: Wind }, // A/C & Heating
        { key: 11, icon: LayoutGrid }, // Wardrobe
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-slate-900 h-[50vh] flex items-center justify-center mb-24">
                <Image src="/hero.jpg" alt="Rooms Header" fill className="object-cover opacity-60" priority />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-widest drop-shadow-xl mb-4">
                        {t('hero.title')}
                    </h1>
                    <p className="text-lg md:text-2xl font-light tracking-wide drop-shadow-md text-balance">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 space-y-24">

                {/* Intro Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-slate-600 text-lg leading-relaxed">{t('intro.text')}</p>
                </div>

                {/* Rooms List */}
                <div className="space-y-32">
                    {roomIds.map((roomId, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={roomId} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center transform transition-all duration-500 hover:scale-[1.01]`}>
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/hero.jpg" // Placeholder until real images are mapped
                                        alt={t(`roomTypes.${roomId}.name`)}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Badge for specific features */}
                                    {['bayWindow', 'superiorHamam'].includes(roomId) && (
                                        <div className="absolute top-4 right-4 bg-teal-700 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded shadow-lg">
                                            {t(`roomTypes.${roomId}.specialFeature`)}
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="border-b border-gray-200 pb-4">
                                        <div className="flex flex-col space-y-2 mb-2">
                                            <h2 className="text-3xl font-bold uppercase tracking-wider text-slate-900">
                                                {t(`roomTypes.${roomId}.name`)}
                                            </h2>
                                            {['standardGround', 'standardLower'].includes(roomId) && (
                                                <span className="text-teal-600 font-medium uppercase tracking-widest text-sm">
                                                    {t(`roomTypes.${roomId}.subtitle`)}
                                                </span>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 text-sm font-medium text-slate-500 uppercase tracking-widest mt-4">
                                            <span className="flex items-center"><Maximize className="w-4 h-4 mr-2" /> {t(`roomTypes.${roomId}.size`)}</span>
                                            <span className="flex items-center"><Users className="w-4 h-4 mr-2" /> {t(`roomTypes.${roomId}.capacity`)}</span>
                                            <span className="flex items-center"><BedDouble className="w-4 h-4 mr-2" /> {t(`roomTypes.${roomId}.bed`)}</span>
                                            {t.has(`roomTypes.${roomId}.view`) && (
                                                <span className="flex items-center"><Wind className="w-4 h-4 mr-2" /> {t(`roomTypes.${roomId}.view`)}</span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {t(`roomTypes.${roomId}.description`)}
                                    </p>

                                    {/* Premium Amenities for this specific room */}
                                    {t.has(`roomTypes.${roomId}.premiumAmenities`) && (
                                        <div className="bg-teal-50/50 p-6 rounded-lg border border-teal-100">
                                            <h4 className="text-sm font-bold text-teal-800 uppercase tracking-widest mb-3">Premium Features</h4>
                                            <div className="grid grid-cols-2 gap-3">
                                                {/* We need to access the array by index since useTranslations doesn't return array directly easily without rich text */}
                                                {/* Using a rough assumption of max 7 items to try and render them safely */}
                                                {[0, 1, 2, 3, 4, 5, 6].map(i => {
                                                    const key = `roomTypes.${roomId}.premiumAmenities.${i}`;
                                                    return t.has(key) ? (
                                                        <div key={i} className="flex items-center text-teal-700 text-sm">
                                                            <Check className="w-4 h-4 mr-2 flex-shrink-0" />
                                                            <span>{t(key as any)}</span>
                                                        </div>
                                                    ) : null;
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    <div className="pt-4">
                                        <BookingButton className="inline-block px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors rounded shadow-lg w-full md:w-auto text-center">
                                            {t('bookNow')}
                                        </BookingButton>
                                    </div>
                                </div>

                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify(generateRoomSchema({
                                            name: 'Alachi Hotel ' + roomId,
                                            description: 'Authentic Alacati Stay',
                                            image: '/hero.jpg',
                                            occupancy: 2
                                        }))
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Common Amenities Grid */}
                <div className="py-12 border-t border-slate-200">
                    <h3 className="text-2xl font-bold uppercase tracking-widest text-slate-900 mb-8 text-center">{t('commonAmenities.title')}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* We iterate up to 12 items as per JSON content */}
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                                <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                <span className="text-sm font-medium text-slate-700">{t(`commonAmenities.items.${idx}`)}</span>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Info Grid: Policies & Included */}
                <div className="grid md:grid-cols-2 gap-12 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100">

                    {/* Included */}
                    <div>
                        <h3 className="text-xl font-bold uppercase tracking-widest text-slate-900 mb-8 border-b border-slate-200 pb-4">
                            {t('included.title')}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {included.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex items-center space-x-3 text-slate-700">
                                        <div className="bg-white p-2 rounded-full shadow-sm">
                                            <Icon className="w-5 h-5 text-teal-700" />
                                        </div>
                                        <span className="font-medium">{t(`included.${item.key}`)}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="text-xl font-bold uppercase tracking-widest text-slate-900 mb-8 border-b border-slate-200 pb-4">
                            {t('policies.title')}
                        </h3>
                        <div className="space-y-4">
                            {policies.map((policy, idx) => {
                                const Icon = policy.icon;
                                return (
                                    <div key={idx} className="flex items-center justify-between text-sm py-2 border-b border-slate-200 last:border-0">
                                        <div className="flex items-center text-slate-500">
                                            <Icon className="w-4 h-4 mr-3" />
                                            <span>{t(`policies.${policy.key}`)}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>

            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Rooms', url: '/rooms' }
                    ]))
                }}
            />
        </div>
    );
}
