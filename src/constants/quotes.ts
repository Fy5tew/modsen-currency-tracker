import type { Currency } from '#types/currency';
import type { Stock } from '#types/stock';

export const STOCKS: Record<string, Stock> = {
    IBOV: {
        code: 'IBOV',
        title: 'Bovespa Index',
    },
    IFIX: {
        code: 'IFIX',
        title: 'IFIX',
    },
} as const;

export const CURRENCIES: Record<string, Currency> = {
    USD: {
        code: 'USD',
        symbol: '$',
        title: 'Commercial Dollar',
    },
    ARS: {
        code: 'ARS',
        symbol: 'AR$',
        title: 'Argentine Peso',
    },
    CAD: {
        code: 'CAD',
        symbol: 'CA$',
        title: 'Canadian Dollar',
    },
    JPY: {
        code: 'JPY',
        symbol: '¥',
        title: 'Yen',
    },
    AUD: {
        code: 'AUD',
        symbol: 'AU$',
        title: 'Australian Dollar',
    },
    CNY: {
        code: 'CNY',
        symbol: 'CN¥',
        title: 'Yuan',
    },
    EUR: {
        code: 'EUR',
        symbol: '€',
        title: 'Euro',
    },
    BTC: {
        code: 'BTC',
        symbol: '₿',
        title: 'Bitcoin',
    },
    ETC: {
        code: 'ETH',
        symbol: 'Ξ',
        title: 'Ethereum',
    },
} as const;

export const DEFAULT_CURRENCY = CURRENCIES.USD;
