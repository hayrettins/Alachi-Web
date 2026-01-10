'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const nextLocale = locale === 'tr' ? 'en' : 'tr';
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700 transition-all group"
            aria-label="Switch Language"
        >
            {/* Flag Icon */}
            <div className="w-5 h-5 rounded-full overflow-hidden relative shadow-sm">
                {locale === 'tr' ? (
                    // Turkey Flag SVG
                    <svg viewBox="0 0 1200 800" className="w-full h-full object-cover">
                        <rect width="1200" height="800" fill="#E30A17" />
                        <circle cx="425" cy="400" r="200" fill="#fff" />
                        <circle cx="475" cy="400" r="160" fill="#E30A17" />
                        <path fill="#fff" d="M583.334 400l180.901 63.603-157.085-117.737v220.572l144.697-128.895z" />
                    </svg>
                ) : (
                    // UK Flag SVG
                    <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                        <clipPath id="s">
                            <path d="M0,0 v30 h60 v-30 z" />
                        </clipPath>
                        <clipPath id="t">
                            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                        </clipPath>
                        <g clipPath="url(#s)">
                            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                        </g>
                    </svg>
                )}
            </div>

            {/* Text */}
            <span className="text-xs font-bold text-slate-300 group-hover:text-white uppercase tracking-widest">
                {locale === 'tr' ? 'TR' : 'ENG'}
            </span>
        </button>
    );
}
