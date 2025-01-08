import { styled } from 'styled-components';

import { COLORS, MEDIA } from '#constants/styles';

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em 5em;

    @media ${MEDIA.tablet} {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h1`
    position: relative;

    padding: 0.5em 0;
    margin: 1em 0;

    border-bottom: 1px solid ${COLORS.starDust};
`;
