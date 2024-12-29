import { ComponentProps } from 'react';

import { NAV_ITEMS } from '#constants/navItems';

import { List, ListItem, NavLink, Wrapper } from './styled';

type NavigationProps = {
    direction?: ComponentProps<typeof List>['$direction'];
    align?: ComponentProps<typeof List>['$align'];
    justify?: ComponentProps<typeof List>['$justify'];
};

export function Navigation({ direction, align, justify }: NavigationProps) {
    return (
        <Wrapper>
            <List $direction={direction} $align={align} $justify={justify}>
                {NAV_ITEMS.map(({ path, title }) => (
                    <ListItem key={path}>
                        <NavLink to={path}>{title}</NavLink>
                    </ListItem>
                ))}
            </List>
        </Wrapper>
    );
}
