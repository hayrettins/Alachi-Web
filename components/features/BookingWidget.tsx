'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export function BookingWidget() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // Define SabeeApp variables globally
            // @ts-ignore
            window.mainWidget = true;
            // @ts-ignore
            window.exitWidget = true;

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://ibe.sabeeapp.com/bewidget.php?id=972bc9c6ae10d008037200174bf15bdb';
            script.id = 'widget_972bc9c6ae10d008037200174bf15bdb';
            script.setAttribute('data-cfasync', 'false');

            // Append to container
            containerRef.current.appendChild(script);

            // Cleanup
            return () => {
                if (containerRef.current && containerRef.current.contains(script)) {
                    // containerRef.current.removeChild(script); 
                    // Note: Removing might break re-navigation if script modifies global state, 
                    // but usually safer to cleanup in SPA. 
                    // However, some external widgets are not idempotent. 
                    // Leaving cleanup common practice.
                }
            }
        }
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl mx-auto -mt-24 relative z-20 border border-gray-100 text-center min-h-[150px]">
            <h1 className="text-xl font-bold uppercase tracking-widest text-primary mb-4">
                Online & Güvenli Rezervasyon. En İyi Fiyat Garantisi!
            </h1>

            <div ref={containerRef} className="min-h-[100px] flex justify-center">
                {/* Script will be injected here */}
            </div>
        </div>
    );
}
