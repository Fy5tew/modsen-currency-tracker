import { ROUTES } from '#constants/routes';
import { BankCard } from '#pages/BankCard';
import { Contato } from '#pages/Contato';
import { Home } from '#pages/Home';
import { NotFound } from '#pages/NotFound';
import { Timeline } from '#pages/Timeline';

export const ROUTES_MAP = {
    home: {
        path: ROUTES.home,
        element: <Home />,
    },
    timeline: {
        path: ROUTES.timeline,
        element: <Timeline />,
    },
    bankCard: {
        path: ROUTES.bankCard,
        element: <BankCard />,
    },
    contato: {
        path: ROUTES.contato,
        element: <Contato />,
    },
    NotFound: {
        path: ROUTES.notFound,
        element: <NotFound />,
    },
};
