import { Mail, MapPin, Phone } from 'lucide-react';
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

    return (
        <div className="bg-white min-h-screen py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold font-heading uppercase tracking-widest text-center text-slate-900 mb-12">Contact Us</h1>

                <div className="max-w-2xl mx-auto">
                    {/* Info */}
                    <div className="space-y-8 text-center">
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Get in Touch</h3>
                            <p className="text-slate-600">
                                We are here to help you plan your perfect stay. Reach out to us for reservations, events, or any inquiries.
                            </p>
                        </div>

                        <div className="space-y-6 inline-block text-left">
                            <div className="flex items-start space-x-4">
                                <MapPin className="mt-1 text-slate-900 w-5 h-5 flex-shrink-0" />
                                <p className="text-slate-600 leading-relaxed">1234 Sokak, No: 5 <br />Alacati, Izmir, Turkey</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="text-slate-900 w-5 h-5 flex-shrink-0" />
                                <p className="text-slate-600">+90 555 123 4567</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Mail className="text-slate-900 w-5 h-5 flex-shrink-0" />
                                <p className="text-slate-600">info@alachihotel.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
