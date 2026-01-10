import { Link } from '@/i18n/routing';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BookingButton } from '@/components/ui/BookingButton';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import OptimizedImage from '@/components/OptimizedImage';

export function Navbar() {
    const t = useTranslations('Navbar');
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Left Section: Logo & Certificates */}
                    <div className="flex items-center gap-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <div className="relative h-16 w-auto">
                                <OptimizedImage
                                    src="logos/logo.png"
                                    alt="Alachi Hotel"
                                    className="h-full w-auto object-contain"
                                    width={180}
                                    height={64}
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Certificates (Desktop) */}
                        <div className="hidden lg:flex items-center gap-3 opacity-90 border-l border-slate-700 pl-8">
                            <OptimizedImage
                                src="certificates/safe-tourism.png"
                                alt="Safe Tourism Certified"
                                className="h-10 w-auto object-contain"
                                width={40}
                                height={40}
                            />
                            <OptimizedImage
                                src="certificates/tripadvisor.png"
                                alt="TripAdvisor 2020"
                                className="h-10 w-auto object-contain"
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">{t('home')}</Link>
                        <Link href="/rooms" className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">{t('rooms')}</Link>
                        <Link href="/location" className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">{t('location')}</Link>
                        <Link href="/dining" className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">{t('dining')}</Link>
                        <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">{t('contact')}</Link>

                        {/* Language Switcher */}
                        <div className="ml-6">
                            <LanguageSwitcher />
                        </div>

                        {/* CTA Button */}
                        <BookingButton className="ml-4 px-6 py-2 bg-teal-700 text-white text-sm font-medium uppercase tracking-wider hover:bg-teal-600 transition-colors shadow-lg shadow-teal-900/20">
                            {t('book')}
                        </BookingButton>
                    </div>

                    {/* Mobile Button */}
                    <button className="md:hidden p-2 text-white hover:text-teal-400 transition-colors">
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
