import { ROUTES } from '#constants/routes';
import { BankCard } from '#pages/BankCard';
import { Contact } from '#pages/Contact';
import { Home } from '#pages/Home';
import { NotFound } from '#pages/NotFound';
import { Timeline } from '#pages/Timeline';

const { home, timeline, bankCard, contact, notFound } = ROUTES;

export const ROUTES_MAP = {
    home: {
        path: home,
        element: <Home />,
    },
    timeline: {
        path: timeline,
        element: <Timeline />,
    },
    bankCard: {
        path: bankCard,
        element: <BankCard />,
    },
    contact: {
        path: contact,
        element: <Contact />,
    },
    notFound: {
        path: notFound,
        element: <NotFound />,
    },
};
