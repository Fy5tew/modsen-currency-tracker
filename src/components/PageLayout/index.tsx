import { Outlet } from 'react-router-dom';

import { Banner } from '#components/Banner';
import { Footer } from '#components/Footer';
import { Header } from '#components/Header';
import { PageContent } from '#components/PageContent';

import { Wrapper } from './styled';

export function PageLayout() {
    return (
        <Wrapper>
            <Header />
            <Banner />
            <PageContent>
                <Outlet />
            </PageContent>
            <Footer />
        </Wrapper>
    );
}
