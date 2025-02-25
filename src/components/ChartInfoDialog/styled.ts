import { styled } from 'styled-components';

import { COLORS } from '#constants/styles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`;

export const Title = styled.h1``;

export const Text = styled.p``;

export const CloseButton = styled.button`
    color: ${COLORS.white};
    background-color: ${COLORS.deepCarminePink};
    padding: 1em;
    border-radius: 1em;
    width: 50%;
    cursor: pointer;
`;
