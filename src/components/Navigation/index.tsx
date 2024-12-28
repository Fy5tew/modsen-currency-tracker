import { NAV_ITEMS } from '#constants/navItems';

import { List, ListItem, NavLink, Wrapper } from './styled';

export function Navigation() {
    return (
        <Wrapper>
            <List>
                {NAV_ITEMS.map(({ path, title }) => (
                    <ListItem key={path}>
                        <NavLink to={path}>{title}</NavLink>
                    </ListItem>
                ))}
            </List>
        </Wrapper>
    );
}
