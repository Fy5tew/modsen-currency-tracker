import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '#components/PageLayout';
import { ROUTES_MAP } from '#constants/routesMap';

export function Router() {
    return (
        <Routes>
            <Route element={<PageLayout />}>
                {Object.values(ROUTES_MAP).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Route>
        </Routes>
    );
}
