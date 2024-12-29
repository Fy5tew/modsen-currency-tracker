import styled, { css } from 'styled-components';

import { GRADIENTS } from '#/constants/styles';

type ButtonProps = {
    $isActive?: boolean;
};

type BarProps = {
    $isActive?: boolean;
};

export const Button = styled.button<ButtonProps>`
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;

    height: 2.5em;
    width: 3em;

    display: flex;
    flex-direction: column;
    justify-content: ${({ $isActive }) =>
        $isActive ? 'center' : 'space-between'};
    align-items: center;
    gap: 0.1em;
`;

export const Bar = styled.span<BarProps>`
    width: 100%;
    height: 0.3em;
    border-radius: 1em;
    background: ${GRADIENTS.headerText};
    transition:
        transform 0.5s ease,
        opacity 0.5s ease;

    ${({ $isActive }) =>
        $isActive &&
        css`
            transform-origin: center;

            &:first-child {
                transform: rotate(45deg);
                position: absolute;
            }

            &:not(:first-child):not(:last-child) {
                opacity: 0;
            }

            &:last-child {
                transform: rotate(-45deg);
                position: absolute;
            }
        `};
`;
