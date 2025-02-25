import { Link as RawLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { COLORS, MEDIA, MIXINS } from '#/constants/styles';

export const Wrapper = styled.footer`
    padding: 2em;

    display: grid;
    grid-template-columns: 1fr repeat(3, 0.3fr);
    justify-items: end;
    gap: 3em;

    @media ${MEDIA.tablet} {
        grid-template-columns: 1fr;

        & > * {
            width: 100%;
        }
    }
`;

export const Title = styled.h4`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;

    ${MIXINS.headerText};
`;

export const DetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media ${() => MEDIA.tablet} {
        align-items: flex-start;
    }
`;

export const Link = styled(RawLink)`
    text-decoration: none;
    color: ${() => COLORS.monSoon};

    &:visited {
        color: ${COLORS.monSoon};
    }

    &:hover {
        text-decoration: underline;
        color: ${COLORS.greenTeal};
    }
`;

export const Copyright = styled.p`
    grid-column: 1/-1;
    width: 100%;
    text-align: center;
`;
