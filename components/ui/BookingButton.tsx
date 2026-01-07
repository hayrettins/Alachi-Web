'use client';

import { useEffect, useState } from 'react';
import { getSabeeUrl } from '@/lib/sabee';
import { useLocale } from 'next-intl';

interface BookingButtonProps {
    className?: string;
    children: React.ReactNode;
}

export function BookingButton({ className, children }: BookingButtonProps) {
    const locale = useLocale();
    const [url, setUrl] = useState<string>('#');

    useEffect(() => {
        setUrl(getSabeeUrl(locale));
    }, [locale]);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </a>
    );
}
