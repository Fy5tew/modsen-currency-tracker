import styled from 'styled-components';

import { COLORS } from '#constants/styles';

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 50px;
    height: 25px;
    background-color: inherit;
    border: 2px solid ${() => COLORS.white};
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;

    &:checked {
        background-color: ${() => COLORS.greenTeal};
    }

    &::before {
        content: '';
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: 2px solid ${() => COLORS.white};
        border-radius: 50%;
        position: absolute;
        top: 49%;
        left: 0;
        transform: translateY(-50%);
        transition: transform 0.3s ease-in-out;
    }

    &:checked::before {
        transform: translate(25px, -50%);
    }
`;
