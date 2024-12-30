import styled from 'styled-components';

import { COLORS } from '#/constants/styles';
import { hexToRgba } from '#/utils/hexToRgba';

export const Wrapper = styled.div`
    position: relative;
    width: clamp(200px, 100%, 500px);
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
`;

export const Input = styled.input`
    font-size: 0.9em;
    padding: 1em;
    border-radius: 10px 0 0 10px;
    border: none;
    outline: none;
    flex: 1;

    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) =>
        theme.themeName === 'dark'
            ? hexToRgba(COLORS.darkJungleGreenPastel, 1)
            : hexToRgba(COLORS.lightGrey, 0.4)};
`;

export const ResetButton = styled.button`
    font-size: 1.5em;
    padding: 0 0.5em;
    border-radius: 0 10px 10px 0;
    border: none;
    cursor: pointer;

    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) =>
        theme.themeName === 'dark'
            ? hexToRgba(COLORS.darkJungleGreenPastel, 0.7)
            : hexToRgba(COLORS.lightGrey, 0.7)};

    &:hover > * {
        font-size: 1.5em;
    }
`;

export const ButtonContent = styled.span`
    transition: font-size 0.3s ease-in-out;
`;

export const OptionsWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 0.5em;
    border-radius: 1em;
    z-index: 5;
    overflow: hidden;

    background-color: ${({ theme }) => theme.backgroundColor};

    &[data-open='false'] {
        display: none;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    max-height: 300px;
    overflow: auto;

    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) =>
        theme.themeName === 'dark'
            ? hexToRgba(COLORS.darkJungleGreenPastel, 0.7)
            : hexToRgba(COLORS.lightGrey, 0.4)};

    &:empty {
        display: none;
    }
`;

export const Option = styled.div`
    padding: 0.5em;
    border-radius: 0.5em;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) =>
            theme.themeName === 'dark'
                ? hexToRgba(COLORS.darkJungleGreenPastel, 1)
                : hexToRgba(COLORS.lightGrey, 0.7)};
    }
`;
