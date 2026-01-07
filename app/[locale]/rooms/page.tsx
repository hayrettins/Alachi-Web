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
    Waves
} from 'lucide-react';

export default async function RoomsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Rooms');

    const rooms = [
        {
            id: 'standard',
            key: 'standard',
            image: '/room.jpg',
            cols: 'md:flex-row'
        },
        {
            id: 'deluxe',
            key: 'deluxe',
            image: '/hero.jpg',
            cols: 'md:flex-row-reverse' // Alternating layout
        },
        {
            id: 'family',
            key: 'family',
            image: '/room.jpg',
            cols: 'md:flex-row'
        }
    ];

    const policies = [
        { key: 'checkIn', icon: Clock },
        { key: 'checkOut', icon: Clock },
        { key: 'smoking', icon: Cigarette },
        { key: 'pets', icon: Dog },
        { key: 'children', icon: Baby },
        { key: 'extraBed', icon: BedDouble },
    ];

    const included = [
        { key: 'breakfast', icon: Coffee },
        { key: 'wifi', icon: Wifi },
        { key: 'parking', icon: Car },
        { key: 'ac', icon: Wind },
        { key: 'pool', icon: Waves },
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-slate-900 h-[50vh] flex items-center justify-center mb-24">
                <Image src="/hero.jpg" alt="Rooms Header" fill className="object-cover opacity-60" priority />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-widest drop-shadow-xl mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-lg md:text-2xl font-light tracking-wide drop-shadow-md text-balance">
                        {t('subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 space-y-32">

                {/* Rooms List */}
                {rooms.map((room) => {
                    return (
                        <div key={room.id} className={`flex flex-col ${room.cols} gap-12 items-center`}>
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl group">
                                <Image
                                    src={room.image}
                                    alt={t(`${room.key}.name`)}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="border-b border-gray-200 pb-4">
                                    <div className="flex items-center space-x-4 mb-2">
                                        <h2 className="text-3xl font-bold uppercase tracking-wider text-slate-900">
                                            {t(`${room.key}.name`)}
                                        </h2>
                                    </div>
                                    <div className="flex space-x-6 text-sm font-medium text-slate-500 uppercase tracking-widest">
                                        <span className="flex items-center"><Maximize className="w-4 h-4 mr-2" /> {t(`${room.key}.size`)}</span>
                                        <span className="flex items-center"><Users className="w-4 h-4 mr-2" /> {t(`${room.key}.occupancy`)}</span>
                                    </div>
                                </div>

                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {t(`${room.key}.description`)}
                                </p>

                                <div className="grid grid-cols-2 gap-3 py-4">
                                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                                        <div key={idx} className="flex items-center text-slate-700 text-sm">
                                            <Check className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                                            <span>{t(`${room.key}.amenities.${idx}` as any)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <BookingButton className="inline-block px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors rounded shadow-lg">
                                        {t('bookNow')}
                                    </BookingButton>
                                </div>
                            </div>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify(generateRoomSchema({
                                        name: 'Alachi Hotel ' + room.key, // Fallback
                                        description: 'Authentic Alacati Stay',
                                        image: room.image,
                                        occupancy: 2
                                    }))
                                }}
                            />
                        </div>
                    );
                })}

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
