import { Theme } from '#/types/theme';

import { COLORS } from './styles';

export const LIGHT_THEME: Theme = {
    themeName: 'light',
    textColor: COLORS.lightBlack,
    backgroundColor: COLORS.white,
};

export const DARK_THEME: Theme = {
    themeName: 'dark',
    textColor: COLORS.lightGrey,
    backgroundColor: COLORS.lightBlack,
};

export const DEFAULT_THEME = DARK_THEME;
