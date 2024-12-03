import { ROUTES_MAP } from '#constants/routesMap';

export const NAV_ITEMS = [
    {
        title: 'Home',
        ...ROUTES_MAP.home,
    },
    {
        title: 'Timeline',
        ...ROUTES_MAP.timeline,
    },
    {
        title: 'Bank card',
        ...ROUTES_MAP.bankCard,
    },
    {
        title: 'Contato',
        ...ROUTES_MAP.contato,
    },
];
