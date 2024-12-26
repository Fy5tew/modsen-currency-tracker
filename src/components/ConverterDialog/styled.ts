import { styled } from 'styled-components';

import { COLORS } from '#constants/styles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5em;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1em;

    width: 100%;
`;

export const LabelSubText = styled.span``;

export const InputWrapper = styled.div`
    position: relative;

    &:has(input:focus) > span {
        display: none;
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
`;

export const InputFormattedText = styled.span`
    position: absolute;
    top: 50%;
    left: 1em;
    transform: translateY(-50%);

    font-size: 1em;
`;

export const Select = styled.select`
    padding: 1em;
    border-radius: 0.5em;

    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) =>
        theme.themeName === 'dark' ? COLORS.onyx : COLORS.white};
`;

export const Option = styled.option``;

export const InfoMessage = styled.p`
    color: ${COLORS.greenTeal};
    min-height: 1.5em;
    line-height: 1.5em;
    text-align: center;
`;

export const ErrorMessage = styled.p`
    color: ${COLORS.deepCarminePink};
    min-height: 1.5em;
    line-height: 1.5em;
    text-align: center;
`;

export const CloseButton = styled.button`
    padding: 1em;
    border-radius: 0.5em;

    color: ${COLORS.white};
    background-color: ${COLORS.deepCarminePink};
`;
