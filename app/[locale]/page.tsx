import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
        <Image
          src="/hero.jpg"
          alt="Alachi Hotel Courtyard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-widest drop-shadow-md">
            Alachi Hotel
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wide drop-shadow-sm text-balance">
            Where traditional Alacati stone meets modern luxury.
          </p>
          <div className="pt-8">
            <Link
              href="/rooms"
              className="px-8 py-3 bg-white text-slate-900 font-medium uppercase tracking-widest hover:bg-gray-100 transition-colors inline-block"
            >
              View Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 bg-white text-slate-900">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-slate-900">
            Welcome to Paradise
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nestled in the heart of Alacati, Alachi Hotel offers an exclusive escape.
            Surrounded by historical stone architecture and vibrant bougainvillea,
            our hotel provides a serene sanctuary just steps away from the bustling town center.
            Experience the perfect blend of authentic Turkish hospitality and contemporary comfort.
          </p>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-center mb-16 text-slate-900">
            Experience Alachi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative h-96 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-slate-200" />
              {/* Placeholder for Room Image - using hero for now or could generate more */}
              <Image src="/hero.jpg" alt="Rooms" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold uppercase tracking-wider">Rooms & Suites</h3>
                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                  Elegant Stone Rooms
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative h-96 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-slate-200" />
              <div className="absolute inset-0 bg-slate-800" /> {/* Placeholder color */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold uppercase tracking-wider">Dining</h3>
                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                  Local Flavors
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative h-96 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-slate-200" />
              <div className="absolute inset-0 bg-slate-700" /> {/* Placeholder color */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold uppercase tracking-wider">Events</h3>
                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                  Unforgettable Moments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
