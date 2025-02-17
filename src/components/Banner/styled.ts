import { Children } from 'react';
import { styled } from 'styled-components';

import { COLORS, GRADIENTS, MEDIA, MIXINS } from '#/constants/styles';

export const Wrapper = styled.div`
    padding: 2em;
    border-radius: 1em;

    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: repeat(
        ${({ children }) => Children.count(children) - 1},
        auto
    );
    align-items: center;
    gap: 1em;

    text-align: right;

    background: ${({ theme }) =>
        theme.themeName === 'dark'
            ? GRADIENTS.bannerBackgroundDark
            : GRADIENTS.bannerBackgroundLight};

    @media ${MEDIA.desktop} {
        & > *:not(:last-child) {
            grid-column: 1;
        }

        & > *:last-child {
            grid-column: 2;
            grid-row: 1/-1;

            height: 100%;
            width: min-content;
        }
    }

    @media ${() => MEDIA.tablet} {
        grid-template-columns: 1fr;
        justify-items: center;

        text-align: center;
        font-size: 0.75em;

        & > *:last-child {
            height: 100%;
            width: 5em;
        }
    }

    @media ${() => MEDIA.phone} {
        font-size: 0.5em;
    }
`;

export const Title = styled.h1`
    font-size: 4em;

    ${() => MIXINS.headerText}
`;

export const Text = styled.p`
    font-size: 1.5em;

    color: ${({ theme }) =>
        theme.themeName === 'dark' ? COLORS.lightGrey : COLORS.lightBlack};
`;
