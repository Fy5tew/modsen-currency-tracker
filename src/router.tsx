import { Route, Routes } from 'react-router-dom';

import { ROUTES_MAP } from '#constants/routesMap';

export function Router() {
    return (
        <Routes>
            {Object.values(ROUTES_MAP).map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
}
