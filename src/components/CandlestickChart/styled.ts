import { styled } from 'styled-components';

export const Wrapper = styled.div`
    overflow-x: auto;
    max-width: calc(100vw - 4em);

    @media (min-width: 1200px) {
        max-width: calc(1200px - 4em);
    }
`;

export const Canvas = styled.canvas`
    margin: 0 auto;
`;
