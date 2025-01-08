import { NavLink as RawNavLink } from 'react-router-dom';
import styled from 'styled-components';

import { GRADIENTS, MIXINS } from '#constants/styles';

type ListProps = {
    $direction?: 'row' | 'column';
    $align?: 'start' | 'center' | 'end';
    $justify?: 'start' | 'center' | 'end';
};

export const Wrapper = styled.nav``;

export const List = styled.ul<ListProps>`
    list-style: none;
    display: flex;
    flex-direction: ${({ $direction }) => $direction ?? 'row'};
    align-items: ${({ $align }) => $align ?? 'normal'};
    justify-content: ${({ $justify }) => $justify ?? 'normal'};
    gap: 2.5em 4.5em;
`;

export const ListItem = styled.li``;

export const NavLink = styled(RawNavLink)`
    position: relative;
    color: inherit;
    text-decoration: none;
    font-size: 1.2em;

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
