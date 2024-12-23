import { Link as RawLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { COLORS, MEDIA, MIXINS } from '#/constants/styles';

export const Wrapper = styled.footer`
    padding: 2em;

    display: grid;
    grid-template-columns: 1fr 0.3fr repeat(3, 0.5fr);
    justify-items: center;
    gap: 2em;

    @media ${() => MEDIA.tablet} {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h4`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;

    ${() => MIXINS.headerText};
`;

export const DetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media ${() => MEDIA.tablet} {
        align-items: flex-start;
        padding-bottom: 1em;
    }
`;

export const Link = styled(RawLink)`
    text-decoration: none;
    color: ${() => COLORS.monSoon};

    &:visited {
        color: ${() => COLORS.monSoon};
    }

    &:hover {
        text-decoration: underline;
        color: ${() => COLORS.greenTeal};
    }
`;

export const Copyright = styled.p`
    grid-column: 1/-1;
`;
