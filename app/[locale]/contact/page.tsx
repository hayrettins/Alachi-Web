import OptimizedImage from '@/components/OptimizedImage';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'SEO' });
    return {
        title: t('contactTitle'),
        description: t('contactDescription')
    };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Contact');

    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full mb-24">
                <OptimizedImage
                    src="contact/hero-contact.jpg"
                    alt="Alachi Hotel Contact"
                    priority
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-widest text-white drop-shadow-md">
                        {t('title')}
                    </h1>
                </div>
            </div>

            {/* Main Content Info */}
            <div className="max-w-3xl mx-auto px-6 text-center">

                {/* 1. Address & Map Button */}
                <div className="mb-16 space-y-8">
                    <p className="text-slate-600 leading-relaxed text-lg max-w-xl mx-auto">
                        {t('addressText')}
                    </p>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Alachi+Hotel+Alacati+Yeni+Mecidiye+Mahallesi+3046+sokak+no+34"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-slate-900 text-slate-900 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300"
                    >
                        {t('viewOnMaps')}
                    </a>
                </div>

                {/* 2. Contact Details (T, M, E) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">

                    {/* Landline */}
                    <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('landlineLabel')}</span>
                        <a href={`tel:${t('phoneText').replace(/\s+/g, '')}`} className="block text-slate-800 text-lg hover:text-teal-700 transition-colors">
                            {t('phoneText')}
                        </a>
                    </div>

                    {/* Mobile */}
                    <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('mobileLabel')}</span>
                        <a
                            href="https://wa.me/905304529051"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-slate-800 text-lg hover:text-teal-700 transition-colors"
                        >
                            {t('whatsappText')}
                        </a>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('email')}</span>
                        <a href={`mailto:${t('emailText')}`} className="block text-slate-800 text-lg hover:text-teal-700 transition-colors">
                            {t('emailText')}
                        </a>
                    </div>
                </div>

                {/* 3. WhatsApp Icon (Floating or Featured) */}
                <div className="mt-16">
                    <a
                        href="https://wa.me/905304529051"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-col items-center group"
                    >
                        <div className="w-12 h-12 mb-4 relative transition-transform duration-300 group-hover:scale-110">
                            <OptimizedImage
                                src="logos/whatsapp.png"
                                alt="WhatsApp"
                                className="object-contain w-full h-full"
                                width={48}
                                height={48}
                            />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-600 transition-colors">
                            {t('whatsappLabel')}
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
}
