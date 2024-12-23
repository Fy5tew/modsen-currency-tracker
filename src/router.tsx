import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '#components/PageLayout';
import { ROUTES_MAP } from '#constants/routesMap';

export function Router() {
    return (
        <Routes>
            <Route element={<PageLayout />}>
                {Object.values(ROUTES_MAP).map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Route>
        </Routes>
    );
}
