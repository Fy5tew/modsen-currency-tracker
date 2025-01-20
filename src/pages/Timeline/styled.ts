import { styled } from 'styled-components';

import { COLORS, MEDIA } from '#constants/styles';

export const ControlsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;

    padding: 1em 0;

    @media ${MEDIA.phone} {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const Select = styled.select`
    padding: 1em;
    border-radius: 0.5em;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) =>
        theme.themeName === 'dark' ? COLORS.onyx : COLORS.white};
`;

export const Option = styled.option``;

export const InfoMessage = styled.p``;

export const ErrorMessage = styled.p`
    color: ${COLORS.deepCarminePink};
`;
