import { createContext } from 'react';

import { DEFAULT_THEME } from '#constants/themes';
import { Theme } from '#types/theme';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: DEFAULT_THEME,
    toggleTheme: () => {},
});
