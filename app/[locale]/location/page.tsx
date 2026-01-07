import { setRequestLocale, getTranslations } from 'next-intl/server';
import {
    MapPin,
    Waves,
    Wine,
    Plane,
    Wind,
    Building,
    Car,
    Bus,
    Footprints,
    Calendar,
    Flower2,
    Sun,
    Leaf,
    Snowflake
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
    params
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Location.meta' });
    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            images: ['/hero.jpg']
        }
    };
}

export default async function LocationPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Location');

    return (
        <main className="location-page bg-white">
            {/* SECTION 1: Hero with Quick Stats */}
            <section className="hero relative h-[50vh] min-h-[500px]">
                <Image
                    src="/hero.jpg"
                    alt={t('hero.title')}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white px-4 max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-widest mb-4">
                            {t('hero.title')}
                        </h1>
                        <p className="text-lg md:text-2xl mb-8 font-light tracking-wide text-balance">
                            {t('hero.subtitle')}
                        </p>

                        {/* Quick Distance Stats */}
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
                            {[
                                { key: 'center', label: 'Alaçatı Center', icon: MapPin },
                                { key: 'beach', label: 'İlıca Beach', icon: Waves },
                                { key: 'wineries', label: 'Urla Wineries', icon: Wine },
                                { key: 'airport', label: 'İzmir Airport', icon: Plane }
                            ].map((item) => {
                                const Icon = item.icon;
                                const text = t(`distances.items.${item.key}`);
                                const value = text.includes(':') ? text.split(':')[1].trim() : text;

                                return (
                                    <div key={item.key} className="flex flex-col items-center group">
                                        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm mb-2 group-hover:bg-white/30 transition-colors">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold">{value}</span>
                                        <span className="text-xs text-white/80 uppercase tracking-widest mt-1">{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Intro Text */}
            <section className="intro py-16 md:py-24 bg-white">
                <div className="container mx-auto max-w-4xl text-center px-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-teal-600 mb-6">Location & Surroundings</h2>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                        {t('intro')}
                    </p>
                </div>
            </section>

            {/* SECTION 3: Interactive Map & Distances */}
            <section className="map-section py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading uppercase tracking-widest text-center mb-12 text-slate-900">
                        {t('distances.title')}
                    </h2>

                    {/* Google Maps Embed */}
                    <div className="map-container mb-12 rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto h-[450px] relative grayscale hover:grayscale-0 transition-all duration-700">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.1234567!2d26.374!3d38.282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE2JzU1LjIiTiAyNsKwMjInMzAuMCJF!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Alachi Hotel Location"
                            className="absolute inset-0"
                        />
                    </div>

                    {/* Distance Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {Object.entries(t.raw('distances.items')).map(([key, value]) => (
                            <div
                                key={key}
                                className="distance-card p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4 border border-slate-100"
                            >
                                <MapPin className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-900 block mb-1 capitalize">{key}</h3>
                                    <p className="text-slate-600 text-sm">
                                        {String(value)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Experiences (3 main activities) */}
            <section className="experiences py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold font-heading uppercase tracking-widest text-center mb-16 text-slate-900">
                        {t('experiences.title')}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Windsurfing */}
                        <div className="experience-card group p-8 bg-slate-50 rounded-2xl hover:bg-teal-900 hover:text-white transition-all duration-500">
                            <Wind className="w-12 h-12 text-teal-600 mb-6 group-hover:text-teal-400" />
                            <h3 className="text-2xl font-bold font-heading uppercase tracking-wider mb-4">
                                {t('experiences.windsurfing.title')}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-300">
                                {t('experiences.windsurfing.description')}
                            </p>
                            <div className="text-sm text-teal-700 font-bold group-hover:text-teal-300 border-t border-slate-200 group-hover:border-slate-700 pt-4">
                                {t('experiences.windsurfing.bestSeason')}
                            </div>
                            <div className="text-xs text-slate-500 mt-2 group-hover:text-slate-400">
                                {t('experiences.windsurfing.schools')}
                            </div>
                        </div>

                        {/* Wine Tourism */}
                        <div className="experience-card group p-8 bg-slate-50 rounded-2xl hover:bg-purple-900 hover:text-white transition-all duration-500">
                            <Wine className="w-12 h-12 text-purple-600 mb-6 group-hover:text-purple-400" />
                            <h3 className="text-2xl font-bold font-heading uppercase tracking-wider mb-4">
                                {t('experiences.wineries.title')}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-300">
                                {t('experiences.wineries.description')}
                            </p>
                            <div className="text-sm text-purple-700 font-bold group-hover:text-purple-300 border-t border-slate-200 group-hover:border-slate-700 pt-4">
                                {t('experiences.wineries.recommended')}
                            </div>
                            <div className="text-xs text-slate-500 mt-2 group-hover:text-slate-400">
                                {t('experiences.wineries.tour')}
                            </div>
                        </div>

                        {/* Culture/Architecture */}
                        <div className="experience-card group p-8 bg-slate-50 rounded-2xl hover:bg-amber-900 hover:text-white transition-all duration-500">
                            <Building className="w-12 h-12 text-amber-600 mb-6 group-hover:text-amber-400" />
                            <h3 className="text-2xl font-bold font-heading uppercase tracking-wider mb-4">
                                {t('experiences.culture.title')}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-300">
                                {t('experiences.culture.description')}
                            </p>
                            <div className="text-sm text-amber-700 font-bold group-hover:text-amber-300 border-t border-slate-200 group-hover:border-slate-700 pt-4">
                                {t('experiences.culture.tip')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Seasonal Guide (4 seasons) */}
            <section className="seasonal py-24 bg-gradient-to-br from-stone-100 to-stone-200">
                <div className="container mx-auto max-w-7xl px-4">
                    <h2 className="text-4xl font-bold font-heading uppercase tracking-widest text-center mb-16 text-slate-900">
                        {t('seasonal.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Spring */}
                        <div className="season-card p-10 bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-50 p-3 rounded-full mr-4">
                                    <Flower2 className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{t('seasonal.spring.title')}</h3>
                                    <p className="text-sm font-medium text-green-600">{t('seasonal.spring.weather')}</p>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6 pl-16">
                                {t('seasonal.spring.description')}
                            </p>
                            <div className="pl-16 text-sm font-bold text-slate-800 flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-green-600" />
                                {t('seasonal.spring.highlights')}
                            </div>
                        </div>

                        {/* Summer */}
                        <div className="season-card p-10 bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <div className="bg-yellow-50 p-3 rounded-full mr-4">
                                    <Sun className="w-8 h-8 text-yellow-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{t('seasonal.summer.title')}</h3>
                                    <p className="text-sm font-medium text-yellow-600">{t('seasonal.summer.weather')}</p>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6 pl-16">
                                {t('seasonal.summer.description')}
                            </p>
                            <div className="pl-16 text-sm font-bold text-slate-800 flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-yellow-600" />
                                {t('seasonal.summer.highlights')}
                            </div>
                        </div>

                        {/* Autumn */}
                        <div className="season-card p-10 bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <div className="bg-orange-50 p-3 rounded-full mr-4">
                                    <Leaf className="w-8 h-8 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{t('seasonal.autumn.title')}</h3>
                                    <p className="text-sm font-medium text-orange-600">{t('seasonal.autumn.weather')}</p>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6 pl-16">
                                {t('seasonal.autumn.description')}
                            </p>
                            <div className="pl-16 text-sm font-bold text-slate-800 flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                                {t('seasonal.autumn.highlights')}
                            </div>
                        </div>

                        {/* Winter */}
                        <div className="season-card p-10 bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-50 p-3 rounded-full mr-4">
                                    <Snowflake className="w-8 h-8 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{t('seasonal.winter.title')}</h3>
                                    <p className="text-sm font-medium text-blue-600">{t('seasonal.winter.weather')}</p>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6 pl-16">
                                {t('seasonal.winter.description')}
                            </p>
                            <div className="pl-16 text-sm font-bold text-slate-800 flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                                {t('seasonal.winter.highlights')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: 2026 Events Calendar */}
            <section className="events py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold font-heading uppercase tracking-widest text-center mb-16 text-slate-900">
                        {t('events.title')}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Event 1: Ot Festivali */}
                        <div className="event-card border-l-4 border-green-500 p-8 bg-green-50/50 rounded-r-xl hover:shadow-lg transition-shadow">
                            <Calendar className="w-8 h-8 text-green-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                {t('events.otFestivali.name')}
                            </h3>
                            <p className="text-sm font-bold text-green-700 mb-2 uppercase tracking-wide">
                                {t('events.otFestivali.dates')}
                            </p>
                            <p className="text-sm text-slate-500 mb-4 flex items-center">
                                <MapPin className="w-3 h-3 mr-1" /> {t('events.otFestivali.location')}
                            </p>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                {t('events.otFestivali.description')}
                            </p>
                        </div>

                        {/* Event 2: Enginar Festival */}
                        <div className="event-card border-l-4 border-purple-500 p-8 bg-purple-50/50 rounded-r-xl hover:shadow-lg transition-shadow">
                            <Calendar className="w-8 h-8 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                {t('events.enginarFestival.name')}
                            </h3>
                            <p className="text-sm font-bold text-purple-700 mb-2 uppercase tracking-wide">
                                {t('events.enginarFestival.dates')}
                            </p>
                            <p className="text-sm text-slate-500 mb-4 flex items-center">
                                <MapPin className="w-3 h-3 mr-1" /> {t('events.enginarFestival.location')}
                            </p>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                {t('events.enginarFestival.description')}
                            </p>
                        </div>

                        {/* Event 3: Surf Festival */}
                        <div className="event-card border-l-4 border-blue-500 p-8 bg-blue-50/50 rounded-r-xl hover:shadow-lg transition-shadow">
                            <Calendar className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                {t('events.surfFestival.name')}
                            </h3>
                            <p className="text-sm font-bold text-blue-700 mb-2 uppercase tracking-wide">
                                {t('events.surfFestival.dates')}
                            </p>
                            <p className="text-sm text-slate-500 mb-4 flex items-center">
                                <MapPin className="w-3 h-3 mr-1" /> {t('events.surfFestival.location')}
                            </p>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                {t('events.surfFestival.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Transportation Options */}
            <section className="transportation py-24 bg-stone-50">
                <div className="container mx-auto max-w-5xl px-4">
                    <h2 className="text-3xl font-bold font-heading uppercase tracking-widest text-center mb-16 text-slate-900">
                        {t('transportation.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Airport Transfer */}
                        <div className="transport-card p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="bg-blue-50 p-4 rounded-full mb-6">
                                <Plane className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                {t('transportation.airport.title')}
                            </h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                {t('transportation.airport.description')}
                            </p>
                            {t('transportation.airport.price') && (
                                <p className="text-sm text-blue-600 font-bold bg-blue-50 px-4 py-1 rounded-full">
                                    {t('transportation.airport.price')}
                                </p>
                            )}
                        </div>

                        {/* Car Rental */}
                        <div className="transport-card p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="bg-emerald-50 p-4 rounded-full mb-6">
                                <Car className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                {t('transportation.car.title')}
                            </h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                {t('transportation.car.description')}
                            </p>
                            {t('transportation.car.companies') && (
                                <p className="text-sm text-slate-500">
                                    {t('transportation.car.companies')}
                                </p>
                            )}
                        </div>

                        {/* Local Dolmuş */}
                        <div className="transport-card p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="bg-amber-50 p-4 rounded-full mb-6">
                                <Bus className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                {t('transportation.dolmus.title')}
                            </h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                {t('transportation.dolmus.description')}
                            </p>
                            {t('transportation.dolmus.routes') && (
                                <p className="text-sm text-slate-500">
                                    {t('transportation.dolmus.routes')}
                                </p>
                            )}
                        </div>

                        {/* Walking */}
                        <div className="transport-card p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="bg-purple-50 p-4 rounded-full mb-6">
                                <Footprints className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                {t('transportation.walking.title')}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {t('transportation.walking.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
