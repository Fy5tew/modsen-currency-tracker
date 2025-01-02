import { Link as RawLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { COLORS, MEDIA, MIXINS } from '#/constants/styles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`;

export const StatusTitle = styled.h1`
    font-size: 10em;
    text-align: center;
    ${MIXINS.headerText}

    @media ${MEDIA.tablet} {
        font-size: 5em;
    }

    @media ${MEDIA.phone} {
        font-size: 3em;
    }
`;

export const Title = styled.h1`
    font-size: 5em;
    text-align: center;
    ${MIXINS.headerText}

    @media ${MEDIA.tablet} {
        font-size: 3em;
    }

    @media ${MEDIA.phone} {
        font-size: 2em;
    }
`;

export const Text = styled.p`
    font-size: 1.5em;
    line-height: 1.5em;
    text-align: center;
    max-width: 500px;

    @media ${MEDIA.tablet} {
        font-size: 1em;
    }
`;

export const Highlight = styled.span`
    color: ${() => COLORS.greenTeal};
`;

export const Link = styled(RawLink)`
    font-size: 1.5em;
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
