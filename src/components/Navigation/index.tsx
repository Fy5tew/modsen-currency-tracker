import { NAV_ITEMS } from '#constants/navItems';

import { List, ListItem, NavLink, Wrapper } from './styled';

export function Navigation() {
    return (
        <Wrapper>
            <List>
                {NAV_ITEMS.map((item) => (
                    <ListItem key={item.path}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                    </ListItem>
                ))}
            </List>
        </Wrapper>
    );
}
