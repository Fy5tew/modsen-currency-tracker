import { styled } from 'styled-components';

import { COLORS } from '#constants/styles';
import { hexToRgba } from '#utils/hexToRgba';

export const Card = styled.button`
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 1em;
    height: fit-content;
    text-align: left;

    border: none;
    border-radius: 1em;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    color: ${({ theme }) => theme.textColor};

    background-color: ${({ theme }) =>
        theme.themeName === 'dark'
            ? COLORS.darkJungleGreenPale
            : hexToRgba(COLORS.lightGrey, 0.2)};

    transition: transform 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const Icon = styled.img`
    height: 3em;
    width: 3em;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const Title = styled.h3``;

export const Text = styled.p`
    color: ${({ theme }) =>
        theme.themeName === 'dark' ? COLORS.cadetBlue : COLORS.monSoon};
`;
