import { ROUTES } from '#constants/routes';
import { BankCard } from '#pages/BankCard';
import { Contato } from '#pages/Contato';
import { Home } from '#pages/Home';
import { NotFound } from '#pages/NotFound';
import { Timeline } from '#pages/Timeline';

const { home, timeline, bankCard, contato, notFound } = ROUTES;

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
    contato: {
        path: contato,
        element: <Contato />,
    },
    notFound: {
        path: notFound,
        element: <NotFound />,
    },
};
