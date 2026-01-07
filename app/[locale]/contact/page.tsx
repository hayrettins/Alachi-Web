import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold font-heading uppercase tracking-widest text-center text-slate-900 mb-12">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Get in Touch</h3>
                            <p className="text-slate-600">
                                We are here to help you plan your perfect stay. Reach out to us for reservations, events, or any inquiries.
                            </p>
                        </div>

                        <div className="space-y-6">
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

                    {/* Form */}
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 shadow-sm">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Name</label>
                                <input type="text" className="w-full p-3 border border-slate-200 bg-white focus:border-slate-900 outline-none transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Email</label>
                                <input type="email" className="w-full p-3 border border-slate-200 bg-white focus:border-slate-900 outline-none transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Message</label>
                                <textarea className="w-full p-3 border border-slate-200 bg-white focus:border-slate-900 outline-none h-32 transition-colors resize-none" placeholder="How can we help?" />
                            </div>
                            <button className="w-full py-3 bg-slate-900 text-white font-bold uppercase tracking-wider text-sm hover:bg-slate-800 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
