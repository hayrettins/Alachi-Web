import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { BookingButton } from '@/components/ui/BookingButton';
import {
    MapPin,
    Car,
    Plane,
    Wind,
    Sun,
    ShoppingBag,
    Camera
} from 'lucide-react';

export default function LocationPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('LocationPage');
    const tHome = useTranslations('HomePage.events'); // Re-use event titles

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section with Map Background Style */}
            <div className="relative h-[40vh] bg-slate-100 flex items-center justify-center overflow-hidden">
                {/* Placeholder for Map Image or Styled Map */}
                <div className="absolute inset-0 bg-teal-900/10" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-widest text-slate-900 mb-4">
                        {t('hero.title')}
                    </h1>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </div>

            {/* Quick Facts */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: t('quickFacts.walk'), icon: MapPin },
                        { label: t('quickFacts.beach'), icon: Sun },
                        { label: t('quickFacts.surf'), icon: Wind },
                        { label: t('quickFacts.airport'), icon: Plane },
                    ].map((fact, idx) => {
                        const Icon = fact.icon;
                        return (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center h-32 hover:-translate-y-1 transition-transform cursor-default">
                                <Icon className="w-8 h-8 text-teal-700 mb-3" />
                                <span className="text-sm font-bold text-slate-800">{fact.label}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 py-24 space-y-24">

                {/* Attractions */}
                <section>
                    <h2 className="text-3xl font-bold font-heading uppercase tracking-wider text-slate-900 mb-12 text-center">
                        {t('attractions.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { key: 'market', icon: ShoppingBag, img: '/hero.jpg' }, // Placeholders
                            { key: 'windmills', icon: Camera, img: '/hero.jpg' },
                            { key: 'beach', icon: Sun, img: '/hero.jpg' },
                            { key: 'surf', icon: Wind, img: '/hero.jpg' }
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.key} className="group cursor-pointer">
                                    <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                                        <Image src={item.img} alt={t(`attractions.${item.key}.title`)} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                                            <Icon className="w-5 h-5 text-slate-900" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t(`attractions.${item.key}.title`)}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {t(`attractions.${item.key}.desc`)}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Google Maps Embed */}
                <section className="h-96 w-full rounded-2xl overflow-hidden shadow-inner relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.1234567!2d26.374!3d38.282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE2JzU1LjIiTiAyNsKwMjInMzAuMCJF!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Note: Coordinates above are approximations for Alacati context, replace with exact Alachi Hotel coords */}
                </section>

                {/* Transportation */}
                <section className="bg-slate-50 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-heading uppercase tracking-wider text-slate-900 mb-8">
                                {t('transport.title')}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Plane className="w-6 h-6 text-teal-700 mt-1 mr-4 flex-shrink-0" />
                                    <p className="text-slate-700 text-lg">{t('transport.airport')}</p>
                                </div>
                                <div className="flex items-start">
                                    <Car className="w-6 h-6 text-teal-700 mt-1 mr-4 flex-shrink-0" />
                                    <p className="text-slate-700 text-lg">{t('transport.transfer')}</p>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-teal-700 mt-1 mr-4 flex-shrink-0" />
                                    <p className="text-slate-700 text-lg">{t('transport.parking')}</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <BookingButton className="inline-block px-8 py-3 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors rounded">
                                    {t('cta.button')}
                                </BookingButton>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden">
                            <Image src="/hero.jpg" alt="Transport" fill className="object-cover" />
                        </div>
                    </div>
                </section>

            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'LocalBusiness',
                        name: 'Alachi Hotel',
                        image: 'https://alachihotel.com/hero.jpg',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Alaçatı Mahallesi 11000 Sokak No:1', // Example
                            addressLocality: 'Çeşme',
                            addressRegion: 'İzmir',
                            postalCode: '35930',
                            addressCountry: 'TR'
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 38.282,
                            longitude: 26.374
                        },
                        url: 'https://alachihotel.com',
                        telephone: '+902321234567'
                    }),
                }}
            />
        </div>
    );
}
