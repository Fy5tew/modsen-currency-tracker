import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Logo } from '#components/Logo';
import { Menu } from '#components/Menu';
import { Navigation } from '#components/Navigation';
import { ToggleSwitch } from '#components/ToggleSwitch';
import { BREAKPOINTS } from '#constants/styles';
import { useMenu } from '#contexts/menu';
import { useTheme } from '#contexts/theme';
import useWindowSize from '#hooks/useWindowSize';

import { MenuButton } from '../MenuButton';
import { HeaderWrapper, MenuWrapper } from './styled';

export function Header() {
    const { theme, toggleTheme } = useTheme();
    const { isOpen, close, toggle } = useMenu();
    const { width } = useWindowSize();
    const location = useLocation();

    useEffect(() => {
        if (width >= BREAKPOINTS.tablet) {
            close();
        }
    }, [width, close]);

    useEffect(() => {
        close();
    }, [location, close]);

    if (width < BREAKPOINTS.tablet) {
        return (
            <>
                <HeaderWrapper>
                    <Logo />
                    <MenuButton isActive={isOpen} onClick={toggle} />
                </HeaderWrapper>
                <Menu isOpen={isOpen} onClose={close}>
                    <MenuWrapper>
                        <MenuButton isActive={isOpen} onClick={toggle} />
                        <ToggleSwitch
                            checked={theme.themeName === 'light'}
                            onChange={toggleTheme}
                        />
                        <Navigation direction="column" align="end" />
                    </MenuWrapper>
                </Menu>
            </>
        );
    }

    return (
        <HeaderWrapper>
            <Logo />
            <Navigation direction="row" />
            <ToggleSwitch
                checked={theme.themeName === 'light'}
                onChange={toggleTheme}
            />
        </HeaderWrapper>
    );
}
