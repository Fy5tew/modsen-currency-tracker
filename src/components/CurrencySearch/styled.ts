import styled from 'styled-components';

import { COLORS } from '#/constants/styles';
import { hexToRgba } from '#/utils/hexToRgba';

type ResetButtonProps = {
    $isVisible: boolean;
};

export const Wrapper = styled.div`
    position: relative;
    width: clamp(200px, 100%, 500px);
`;

export const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
`;

export const Input = styled.input`
    font-size: 0.9em;
    padding: 1em;
    padding-right: 4.5em;
    border: none;
    outline: none;
    width: 100%;

    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) =>
        theme.themeName === 'dark'
            ? hexToRgba(COLORS.darkJungleGreenPastel, 0.7)
            : hexToRgba(COLORS.lightGrey, 0.4)};
`;

export const ResetButton = styled.button<ResetButtonProps>`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: ${({ $isVisible }) => ($isVisible ? '2em' : '0')};
    height: 100%;
    overflow: hidden;
    font-size: 1.5em;
    border: none;
    cursor: pointer;

    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) =>
        theme.themeName === 'dark'
            ? hexToRgba(COLORS.darkJungleGreenPastel, 1)
            : hexToRgba(COLORS.lightGrey, 0.7)};
    transition: width 0.2s ease-in-out;

    &:hover > * {
        font-size: 1.5em;
    }
`;

export const ButtonContent = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: font-size 0.2s ease-in-out;
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
