import styled, { css } from 'styled-components';

import { COLORS } from '#/constants/styles';
import chevronIcon from '#assets/chevron.svg';

type WrapperProps = {
    $isOpen?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    pointer-events: none;

    &::before {
        content: '';
        position: absolute;
        right: 1em;
        top: 50%;
        width: 16px;
        height: 16px;
        background-color: currentColor;
        -webkit-mask: url('${chevronIcon}') no-repeat center;
        -webkit-mask-size: contain;
        mask: url('${chevronIcon}') no-repeat center;
        mask-size: contain;
        transition: transform 0.5s ease-in-out;
        transform: translateY(-50%);
    }

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            &::before {
                transform: translateY(-50%) rotate(180deg);
            }
        `}
`;

export const Select = styled.select`
    appearance: none;
    pointer-events: auto;
    padding: 1em;
    padding-right: 3em;
    border-radius: 0.5em;
    width: 100%;

    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) =>
        theme.themeName === 'dark' ? COLORS.onyx : COLORS.white};
`;

export const Option = styled.option``;
