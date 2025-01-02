import { useLocation } from 'react-router-dom';

import { ROUTES } from '#constants/routes';

import { Highlight, Link, StatusTitle, Text, Title, Wrapper } from './styled';

export function NotFound() {
    const location = useLocation();

    return (
        <Wrapper>
            <StatusTitle>404</StatusTitle>
            <Title>Page Not Found</Title>
            <Text>
                The page you are looking for does not exist. Try to check path{' '}
                <Highlight>'{location.pathname}'</Highlight> for errors or
                return to the home page.
            </Text>
            <Link to={ROUTES.home}>Go to home</Link>
        </Wrapper>
    );
}
