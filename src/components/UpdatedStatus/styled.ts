import styled, { keyframes } from 'styled-components';

import { COLORS } from '#constants/styles';
import { hexToRgba } from '#utils/hexToRgba';

const pulse = keyframes`
    0% {
        box-shadow: 0 0 0 0 ${hexToRgba(COLORS.greenTeal, 0.4)};
    }
    70% {
        box-shadow: 0 0 0 10px ${hexToRgba(COLORS.greenTeal, 0)};
    }
    100% {
        box-shadow: 0 0 0 0 ${hexToRgba(COLORS.greenTeal, 0)};
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1em;
`;

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${COLORS.greenTeal};
    border-radius: 50%;
    position: relative;
    animation: ${pulse} 2s infinite;
`;

export const Text = styled.p`
    font-size: 1.1em;
`;
