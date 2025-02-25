import { styled } from 'styled-components';

import { COLORS } from '#constants/styles';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1em;

    width: 100%;
`;

export const InputWrapper = styled.div`
    position: relative;

    &:has(input:focus) > div {
        display: none;
    }

    &:has(input[disabled]) > div {
        color: ${COLORS.monSoon};
    }

    &:not(:has(input:focus)) > input {
        color: transparent;
    }
`;

export const Input = styled.input`
    padding: 1em;
    border-radius: 0.5em;
    width: 100%;

    font-size: 1em;

    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) =>
        theme.themeName === 'dark' ? COLORS.onyx : COLORS.white};

    &::-webkit-inner-spin-button {
        filter: invert(
            ${({ theme }) => (theme.themeName === 'dark' ? '1' : '0')}
        );
    }
`;

export const FormattedTextWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 1em;
    width: calc(100% - 2em);
    height: 100%;
    display: flex;
    align-items: center;
`;

export const FormattedText = styled.span`
    font-size: 1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
