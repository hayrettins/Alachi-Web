import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'SEO' });
    return {
        title: t('diningTitle'),
        description: t('diningDescription')
    };
}

export default async function DiningPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="relative h-[50vh] w-full">
                <Image src="/dining.jpg" alt="Alachi Dining" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="text-white space-y-4">
                        <h1 className="text-5xl font-bold font-heading uppercase tracking-widest">Alachi Dining</h1>
                        <p className="text-xl font-light tracking-wider">A culinary journey through the Aegean</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 py-24 space-y-32">
                {/* Section 1 */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-slate-900">Farm to Table Breakfast</h2>
                        <div className="w-20 h-1 bg-slate-900" />
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Start your day with flavors that tell a story. Our breakfast features organic produce sourced directly from local Urlachi farms,
                            homemade jams, artisanal cheeses, and fresh-baked breads. Served daily in our sun-drenched courtyard.
                        </p>
                        <p className="text-slate-500 text-sm italic">Daily: 08:00 - 11:00</p>
                    </div>
                    <div className="flex-1 relative h-96 w-full">
                        <Image src="/dining.jpg" alt="Breakfast" fill className="object-cover" />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-slate-900">Sunset Dinner & Cocktails</h2>
                        <div className="w-20 h-1 bg-slate-900" />
                        <p className="text-slate-600 leading-relaxed text-lg">
                            As the sun sets over Alacati, our courtyard transforms into an intimate dining venue.
                            Enjoy a curated menu of Aegean fusion dishes paired with our signature cocktails and local wines.
                        </p>
                        <p className="text-slate-500 text-sm italic">Dinner: 19:00 - 23:00</p>
                    </div>
                    <div className="flex-1 relative h-96 w-full">
                        {/* Reusing Dining image for now, ideally strictly distinct but fine for MVP */}
                        <Image src="/dining.jpg" alt="Dinner" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                </div>
            </div>
        </div>
    );
}
