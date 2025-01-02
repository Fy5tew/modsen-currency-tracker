import { ROUTES_MAP } from '#constants/routesMap';

const { home, timeline, bankCard, contact } = ROUTES_MAP;

export const NAV_ITEMS = [
    {
        title: 'Home',
        ...home,
    },
    {
        title: 'Timeline',
        ...timeline,
    },
    {
        title: 'Bank card',
        ...bankCard,
    },
    {
        title: 'Contact',
        ...contact,
    },
];
