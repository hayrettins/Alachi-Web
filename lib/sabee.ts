import { format, addDays } from 'date-fns';

export const SABEE_CONFIG = {
    baseUrl: 'https://ibe.sabeeapp.com/properties/Alachi-Hotel-booking/',
    providerId: 'bSp36092a62436c252c'
};

export function getSabeeUrl(locale: string = 'en') {
    const today = new Date();
    const tomorrow = addDays(today, 1);

    const checkin = format(today, 'yyyy-MM-dd');
    const checkout = format(tomorrow, 'yyyy-MM-dd');

    // Map locale to Sabee format (En, Tr, etc) if needed, currently JS used 'En'
    const lang = locale.charAt(0).toUpperCase() + locale.slice(1);

    const url = new URL(SABEE_CONFIG.baseUrl);
    url.searchParams.append('p', SABEE_CONFIG.providerId);
    url.searchParams.append('checkin', checkin);
    url.searchParams.append('checkout', checkout);
    url.searchParams.append('adults', '2');
    url.searchParams.append('l', lang);

    return url.toString();
}
