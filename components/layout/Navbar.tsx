import { Link } from '@/i18n/routing';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BookingButton } from '@/components/ui/BookingButton';

export function Navbar() {
    const t = useTranslations('Navbar');
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold font-heading uppercase tracking-widest text-slate-900">
                        Alachi
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wider">{t('home')}</Link>
                        <Link href="/rooms" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wider">{t('rooms')}</Link>
                        <Link href="/dining" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wider">{t('dining')}</Link>
                        <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wider">{t('contact')}</Link>
                        {/* CTA Button */}
                        <BookingButton className="ml-4 px-6 py-2 bg-slate-900 text-white text-sm font-medium uppercase tracking-wider hover:bg-slate-800 transition-colors">
                            {t('book')}
                        </BookingButton>
                    </div>

                    {/* Mobile Button */}
                    <button className="md:hidden p-2 text-slate-900">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
