'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        // Simple "Client-Side Geo": Check browser language
        const userLang = navigator.language || (navigator as any).userLanguage;

        if (userLang && userLang.toLowerCase().startsWith('tr')) {
            router.replace('/tr');
        } else {
            router.replace('/en');
        }
    }, [router]);

    // Render nothing while redirecting
    return null;
}
