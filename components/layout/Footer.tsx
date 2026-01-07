import { Link } from '@/i18n/routing';

export function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">Alachi</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Experience the timeless beauty of Alacati in a setting of modern luxury and comfort.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold uppercase tracking-wider mb-6 text-sm">Explore</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><Link href="/rooms" className="hover:text-white transition-colors">Rooms & Suites</Link></li>
                        <li><Link href="/dining" className="hover:text-white transition-colors">Dining</Link></li>
                        <li><Link href="/amenities" className="hover:text-white transition-colors">Amenities</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold uppercase tracking-wider mb-6 text-sm">Contact</h4>
                    <div className="space-y-4 text-sm text-slate-400">
                        <p>1234 Sokak, No: 5<br />Alacati, Izmir, Turkey</p>
                        <p>+90 555 123 4567</p>
                        <p>info@alachihotel.com</p>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold uppercase tracking-wider mb-6 text-sm">Follow Us</h4>
                    <p className="text-slate-400 text-sm mb-4">Stay updated with our latest offers.</p>
                    <div className="flex space-x-4">
                        {/* Placeholder Social Icons */}
                        <a href="#" className="text-slate-400 hover:text-white">Instagram</a>
                        <a href="#" className="text-slate-400 hover:text-white">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-900 text-center text-sm text-slate-600">
                © {new Date().getFullYear()} Alachi Hotel. All rights reserved.
            </div>
        </footer>
    )
}
