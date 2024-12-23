import { NavLink as RawNavLink } from 'react-router-dom';
import styled from 'styled-components';

import { GRADIENTS, MEDIA, MIXINS } from '#constants/styles';

export const Wrapper = styled.nav``;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 3em;

    @media ${MEDIA.tablet} {
        flex-direction: column;
    }
`;

export const ListItem = styled.li``;

export const NavLink = styled(RawNavLink)`
    position: relative;
    text-decoration: none;

    &:visited {
        color: inherit;
    }

    &:hover {
        ${() => MIXINS.headerText};
    }

    &.active {
        ${() => MIXINS.headerText};
    }

    &:hover::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.5px;
        background: ${GRADIENTS.headerText};
    }
`;
