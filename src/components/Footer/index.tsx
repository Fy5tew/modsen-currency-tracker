import { Details, Summary } from '#components/Details';
import { BREAKPOINTS } from '#constants/styles';
import useWindowSize from '#hooks/useWindowSize';

import { Logo } from '../Logo';
import { Copyright, DetailsContent, Link, Title, Wrapper } from './styled';

export function Footer() {
    const { width } = useWindowSize();
    const isDatailsDisabled = width > BREAKPOINTS.tablet;
    const summaryTabIndex = isDatailsDisabled ? -1 : 0;

    return (
        <Wrapper>
            <Details open={isDatailsDisabled}>
                <Summary tabIndex={summaryTabIndex}>
                    <Title>
                        <Logo />
                        <span>Modsen Currency Tracker</span>
                    </Title>
                </Summary>
                <DetailsContent>
                    Since then, the company has grown organically to. Starsup is
                    the world's largest trading platform, with $12 billion worth
                    of currency trading and 500,000 tickets sold daily to tens
                    of thousands of traders worldwide.
                </DetailsContent>
            </Details>
            <Details open={isDatailsDisabled}>
                <Summary tabIndex={summaryTabIndex}>General</Summary>
                <DetailsContent>
                    <Link to="">Market</Link>
                    <Link to="">Service</Link>
                </DetailsContent>
            </Details>
            <Details open={isDatailsDisabled}>
                <Summary tabIndex={summaryTabIndex}>Product</Summary>
                <DetailsContent>
                    <Link to="">Sparks</Link>
                    <Link to="">Snaps</Link>
                </DetailsContent>
            </Details>
            <Details open={isDatailsDisabled}>
                <Summary tabIndex={summaryTabIndex}>Community</Summary>
                <DetailsContent>
                    <Link to="">Ideas</Link>
                    <Link to="">Streams</Link>
                </DetailsContent>
            </Details>
            <Copyright>Startsup © 2023-2024, All Rights Reserved</Copyright>
        </Wrapper>
    );
}
