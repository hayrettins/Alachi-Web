import { Link } from '@/i18n/routing';
import OptimizedImage from '@/components/OptimizedImage';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { BookingButton } from '@/components/ui/BookingButton';
import { generateHotelSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import {
  Wind,
  Sun,
  MapPin,
  Utensils,
  Waves,
  Flower2,
  Calendar,
  Clock,
  Star,
  Camera
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });
  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    keywords: t('homeKeywords'),
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('HomePage');

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
        <OptimizedImage
          src="hero-home.jpg"
          alt="Alachi Hotel Courtyard"
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-widest drop-shadow-md">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wide drop-shadow-sm text-balance">
            {t('hero.subtitle')}
          </p>
          <div className="pt-8">
            <BookingButton className="px-8 py-3 bg-white text-slate-900 font-medium uppercase tracking-widest hover:bg-gray-100 transition-colors inline-block rounded">
              {t('hero.bookNow')}
            </BookingButton>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <Wind className="w-12 h-12 text-teal-700 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">
            {t('philosophy.title')}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t('philosophy.description')}
          </p>
          <div className="w-24 h-1 bg-teal-700 mx-auto mt-8" />
        </div>
      </section>

      {/* 3. FEATURES GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-slate-900">
              {t('features.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              { icon: MapPin, title: t('features.alacati.title'), desc: t('features.alacati.description'), link: '/location' },
              { icon: Utensils, title: t('features.breakfast.title'), desc: t('features.breakfast.description'), link: '/dining' },
              { icon: Waves, title: t('features.pool.title'), desc: t('features.pool.description'), link: '/amenities' },
              { icon: Wind, title: t('features.design.title'), desc: t('features.design.description'), link: '/rooms' },
              { icon: Flower2, title: t('features.urlachi.title'), desc: t('features.urlachi.description'), link: '/dining' },
              { icon: Sun, title: t('features.garden.title'), desc: t('features.garden.description'), link: '/amenities' },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Link href={feature.link} key={idx} className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 block">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{feature.desc}</p>
                  <span className="text-teal-700 text-sm font-bold uppercase tracking-wider group-hover:underline">Explore &rarr;</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. URLACHI FARM SECTION */}
      <section className="py-24 bg-teal-900/5">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 md:h-[500px] w-full row-start-2 md:row-start-1">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 relative z-10">
              <OptimizedImage src="amenities/urlachi-farm.jpg" alt="Farm Produce" className="object-cover rounded-lg shadow-xl w-full h-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 relative z-0 translate-x-4 translate-y-4">
              <OptimizedImage src="amenities/breakfast.jpg" alt="Organic Breakfast" className="object-cover rounded-lg shadow-lg opacity-80 w-full h-full" />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-slate-900">
              {t('urlachiSection.title')}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {t('urlachiSection.description')}
            </p>
            <Link href="/dining" className="inline-block px-8 py-3 bg-teal-800 text-white font-bold uppercase tracking-widest hover:bg-teal-700 transition-colors rounded">
              {t('urlachiSection.link')}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. GUEST EXPERIENCE TIMELINE */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-widest mb-12">
              {t('timeline.title')}
            </h2>
            <div className="space-y-8 border-l border-slate-700 pl-8 ml-4">
              {[
                { time: t('timeline.morning'), icon: Utensils },
                { time: t('timeline.noon'), icon: Waves },
                { time: t('timeline.afternoon'), icon: Wind },
                { time: t('timeline.evening'), icon: Camera }, // Camera as placeholder/fallback
                { time: t('timeline.night'), icon: Utensils },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[45px] bg-slate-800 p-2 rounded-full border border-slate-600">
                      <Clock className="w-4 h-4 text-teal-400" />
                    </span>
                    <h3 className="text-lg md:text-xl font-medium text-slate-200">{item.time}</h3>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden border border-slate-700">
            <OptimizedImage src="pool-evening.jpg" alt="Alachi Lifestyle" className="object-cover opacity-80 w-full h-full" />
          </div>
        </div>
      </section>

      {/* 6. EVENTS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-slate-900 mb-4">
            {t('events.title')}
          </h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">{t('events.subtitle')}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { key: 'herbFestival', month: 'April' },
              { key: 'artichokeFestival', month: 'May' },
              { key: 'tastingAlacati', month: 'June' },
              { key: 'surfFestival', month: 'August' },
              { key: 'fishingFest', month: 'September' },
              // Reusing herb key just for 6th item filler or remove if only 5
              { key: 'herbFestival', month: 'October' },
            ].map((event, idx) => (
              <div key={idx} className="group relative h-64 overflow-hidden rounded-lg cursor-pointer">
                <OptimizedImage src="amenities/garden.jpg" alt={t(`events.${event.key}`)} className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-full" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <span className="text-sm font-bold uppercase tracking-widest mb-2 bg-teal-600 px-2 py-1 rounded">{event.month}</span>
                  <h3 className="text-xl font-bold text-center">{t(`events.${event.key}`)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS PLACEHOLDER */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-900 mb-2">{t('testimonials.title')}</h2>
          <p className="text-slate-500 mb-12">{t('testimonials.subtitle')}</p>

          <div className="bg-white p-12 rounded-xl shadow-sm border border-slate-100">
            <div className="flex justify-center mb-6 text-yellow-400 space-x-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <p className="text-xl text-slate-800 italic font-medium mb-6">"{t('testimonials.placeholder')}"</p>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Coming Soon on TripAdvisor</div>
          </div>
        </div>
      </section>



      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHotelSchema())
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema())
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([{ name: 'Home', url: '/' }]))
        }}
      />
    </div>
  );
}
