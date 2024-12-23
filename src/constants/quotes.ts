import arsIcon from '#assets/ARS.svg';
import audIcon from '#assets/AUD.svg';
import btcIcon from '#assets/BTC.svg';
import cadIcon from '#assets/CAD.svg';
import cnyIcon from '#assets/CNY.svg';
import ethIcon from '#assets/ETH.svg';
import eurIcon from '#assets/EUR.svg';
import ibovIcon from '#assets/IBOV.svg';
import ifixIcon from '#assets/IFIX.svg';
import jpyIcon from '#assets/JPY.svg';
import usdIcon from '#assets/USD.svg';
import type { Currency } from '#types/currency';
import type { Stock } from '#types/stock';

export const STOCKS: Record<string, Stock> = {
    IBOV: {
        code: 'IBOV',
        title: 'Bovespa Index',
        icon: ibovIcon,
    },
    IFIX: {
        code: 'IFIX',
        title: 'IFIX',
        icon: ifixIcon,
    },
} as const;

export const CURRENCIES: Record<string, Currency> = {
    USD: {
        code: 'USD',
        symbol: '$',
        title: 'Commercial Dollar',
        icon: usdIcon,
    },
    ARS: {
        code: 'ARS',
        symbol: 'AR$',
        title: 'Argentine Peso',
        icon: arsIcon,
    },
    CAD: {
        code: 'CAD',
        symbol: 'CA$',
        title: 'Canadian Dollar',
        icon: cadIcon,
    },
    JPY: {
        code: 'JPY',
        symbol: '¥',
        title: 'Yen',
        icon: jpyIcon,
    },
    AUD: {
        code: 'AUD',
        symbol: 'AU$',
        title: 'Australian Dollar',
        icon: audIcon,
    },
    CNY: {
        code: 'CNY',
        symbol: 'CN¥',
        title: 'Yuan',
        icon: cnyIcon,
    },
    EUR: {
        code: 'EUR',
        symbol: '€',
        title: 'Euro',
        icon: eurIcon,
    },
    BTC: {
        code: 'BTC',
        symbol: '₿',
        title: 'Bitcoin',
        icon: btcIcon,
    },
    ETC: {
        code: 'ETH',
        symbol: 'Ξ',
        title: 'Ethereum',
        icon: ethIcon,
    },
} as const;

export const DEFAULT_CURRENCY = CURRENCIES.USD;
