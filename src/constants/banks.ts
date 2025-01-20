import { Bank } from '#types/bank';

export const BANKS: Bank[] = [
    {
        id: '1',
        title: 'PriorBank',
        address: 'Minsk, Niamiga Street, 30к1',
        currencies: ['USD', 'CNY', 'BTC'],
        location: {
            latitude: 53.901647,
            longitude: 27.54753,
        },
    },
    {
        id: '2',
        title: 'Belarusbank',
        address: 'Minsk, Niezaliezhnasci Avenue, 155к1',
        currencies: ['USD', 'EUR'],
        location: {
            latitude: 53.935151,
            longitude: 27.650854,
        },
    },
    {
        id: '3',
        title: 'Technobank',
        address: 'Minsk, Rudabielskaja Street, 3',
        currencies: ['EUR', 'CAD'],
        location: {
            latitude: 53.861235,
            longitude: 27.638305,
        },
    },
    {
        id: '4',
        title: 'MTBank',
        address: 'Minsk, Pieramozhcaw Avenue, 20',
        currencies: ['JPY', 'ARS', 'AUD', 'USD'],
        location: {
            latitude: 53.932712,
            longitude: 27.510501,
        },
    },
    {
        id: '5',
        title: 'Alfa-Bank',
        address: 'Minsk, Dziarzhynskaga Avenue, 119',
        currencies: ['AUD', 'BTC', 'CNY'],
        location: {
            latitude: 53.851256,
            longitude: 27.47677,
        },
    },
    {
        id: '6',
        title: 'Belinvestbank',
        address: 'Minsk, Pushkina Avenue, 81',
        currencies: ['ETH', 'EUR'],
        location: {
            latitude: 53.921223,
            longitude: 27.498617,
        },
    },
];
