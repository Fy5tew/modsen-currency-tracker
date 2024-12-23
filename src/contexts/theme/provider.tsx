import { ReactNode, useCallback, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { DARK_THEME, DEFAULT_THEME, LIGHT_THEME } from '#constants/themes';

import { ThemeContext } from './context';

type ThemeProviderProps = {
    children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState(DEFAULT_THEME);

    const toggleTheme = useCallback(() => {
        if (theme === DARK_THEME) {
            setTheme(LIGHT_THEME);
        } else {
            setTheme(DARK_THEME);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
        </ThemeContext.Provider>
    );
}
