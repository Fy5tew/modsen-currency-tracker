import { styled } from 'styled-components';

import chevronIcon from '#assets/chevron.svg';
import { COLORS, MEDIA } from '#constants/styles';

export const Details = styled.details`
    &[open] {
        & > summary::before {
            transform: translateY(calc(-50% - 1em)) rotate(180deg);
        }
    }

    @media ${() => MEDIA.tablet} {
        border-bottom: 2px solid ${COLORS.starDust};
        padding-bottom: 1em;
    }
`;

export const Summary = styled.summary`
    position: relative;
    list-style: none;
    padding-bottom: 2em;

    &::before {
        content: '';
        position: absolute;
        right: 10px;
        top: 50%;
        width: 16px;
        height: 16px;
        background-color: currentColor;
        -webkit-mask: url('${chevronIcon}') no-repeat center;
        -webkit-mask-size: contain;
        mask: url('${chevronIcon}') no-repeat center;
        mask-size: contain;
        transform: translateY(calc(-50% - 1em));
        transition: transform 0.5s ease-in-out;
    }

    @media ${() => MEDIA.desktop} {
        pointer-events: none;

        &::before {
            display: none;
        }
    }
`;
