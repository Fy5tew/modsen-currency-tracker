import { Popup } from 'react-map-gl';
import { styled } from 'styled-components';

import { COLORS } from '#/constants/styles';

export const StyledPopup = styled(Popup)`
    .mapboxgl-popup-close-button {
        font-size: 1.5em;
        padding: 0.5em;
    }

    .mapboxgl-popup-content {
        border-radius: 1em;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 0.5em;
    color: ${COLORS.lightBlack};
`;

export const Header = styled.h3``;

export const Content = styled.p``;
