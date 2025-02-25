import { styled } from 'styled-components';

import { GRADIENTS } from '#/constants/styles';
import mapMapkerIcon from '#assets/map-marker.svg';

export const Image = styled.div`
    position: relative;
    width: 3em;
    height: 3em;

    background: ${GRADIENTS.headerText};

    -webkit-mask-image: url(${mapMapkerIcon});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;
    mask-image: url(${mapMapkerIcon});
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
`;
