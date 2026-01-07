import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { BookingButton } from '@/components/ui/BookingButton';
import { generateRoomSchema, generateBreadcrumbSchema } from '@/lib/schema';

const rooms = [
    {
        id: 1,
        name: 'Deluxe Stone Room',
        description: 'Authentic stone walls with modern amenities and vibrant courtyard views. A perfect blend of history and luxury.',
        image: '/room.jpg'
    },
    {
        id: 2,
        name: 'Premium Suite',
        description: 'Spacious suite with private balcony and panoramic views of Alacati. Features a king-sized bed and rain shower.',
        image: '/room.jpg'
    },
    {
        id: 3,
        name: 'Courtyard Standard',
        description: 'Cozy and elegant, perfect for a romantic getaway. Steps away from our pool and lounge area.',
        image: '/room.jpg'
    }
];

import { setRequestLocale } from 'next-intl/server';

export default async function RoomsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="relative bg-slate-900 h-[40vh] flex items-center justify-center">
                <Image src="/room.jpg" alt="Rooms Header" fill className="object-cover opacity-50" />
                <div className="relative z-10 text-center text-white p-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-widest drop-shadow-lg">Our Rooms</h1>
                    <p className="mt-4 text-lg md:text-xl font-light tracking-wide drop-shadow-md">Experience the art of slow living.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {rooms.map((room) => (
                    <div key={room.id} className="group cursor-pointer">
                        <div className="relative h-80 w-full overflow-hidden">
                            <Image
                                src={room.image}
                                alt={room.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="mt-6 space-y-3">
                            <div className="border-b border-gray-100 pb-2">
                                <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900">{room.name}</h3>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">{room.description}</p>
                            <div className="pt-4">
                                <BookingButton className="block text-center w-full py-3 border border-slate-900 text-slate-900 font-bold uppercase tracking-wider text-sm hover:bg-slate-900 hover:text-white transition-colors">
                                    Book Now
                                </BookingButton>
                            </div>
                        </div>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(generateRoomSchema(room))
                            }}
                        />
                    </div>
                ))}
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
