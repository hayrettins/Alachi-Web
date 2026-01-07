'use client';

import { useState } from 'react';

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real app, you would use emailjs.sendForm() here
        // Example: emailjs.sendForm('service_id', 'template_id', e.currentTarget, 'public_key')

        console.log('Form submitted successfully');
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 text-green-900 p-8 rounded-lg border border-green-200 text-center">
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for contacting us. We will get back to you shortly.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-bold uppercase tracking-wider underline hover:text-green-700"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 shadow-sm text-slate-900">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Name</label>
                    <input required type="text" name="user_name" className="w-full p-3 border border-slate-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors rounded" placeholder="Your Name" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Email</label>
                    <input required type="email" name="user_email" className="w-full p-3 border border-slate-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors rounded" placeholder="your@email.com" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Message</label>
                    <textarea required name="message" className="w-full p-3 border border-slate-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none h-32 transition-colors resize-none rounded" placeholder="How can we help?" />
                </div>
                <button
                    disabled={status === 'loading'}
                    className="w-full py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity rounded disabled:opacity-50"
                >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
