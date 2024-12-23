import { Logo } from '#components/Logo';
import { Navigation } from '#components/Navigation';
import { ToggleSwitch } from '#components/ToggleSwitch';
import { useTheme } from '#contexts/theme';

import { Wrapper } from './styled';

export function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Wrapper>
            <Logo />
            <Navigation />
            <ToggleSwitch
                checked={theme.themeName === 'light'}
                onChange={toggleTheme}
            />
        </Wrapper>
    );
}
