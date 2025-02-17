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

export const LabelSubText = styled.span``;

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
