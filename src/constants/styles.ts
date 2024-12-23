import { hexToRgba } from '#utils/hexToRgba';

export const COLORS = {
    black: '#000000',
    onyx: '#121212',
    white: '#FFFFFF',
    lightBlack: '#030304',
    lightGrey: '#D9D9D9',
    monSoon: '#898989',
    malachite: '#00CE2C',
    yellowishGreenModerate: '#AEDF23',
    yellowishGreenVibrant: '#A3DC00',
    starDust: '#9E9E9E',
    greenTeal: '#00BC4F',
    cadetBlue: '#A7B2C3',
    sunshade: '#FF971D',
    deepCarminePink: '#EA3943',
    darkMintGreen: '#16C782',
    darkJungleGreenPale: '#202025',
    darkJungleGreenPastel: '#1B2028',
    darkSpringGreen: '#247940',
} as const;

export const GRADIENTS = {
    headerText: `linear-gradient(
        90deg,
        ${COLORS.malachite} 0%,
        ${COLORS.yellowishGreenModerate} 40%,
        ${COLORS.yellowishGreenVibrant} 100%
    )`,
    bannerBackgroundDark: `linear-gradient(
        45deg,
        ${COLORS.lightBlack} 15%,
        ${COLORS.onyx} 25%,
        ${COLORS.darkSpringGreen} 50%,
        ${COLORS.onyx} 75%,
        ${COLORS.lightBlack} 85%
    )`,
    bannerBackgroundLight: `linear-gradient(
        45deg,
        ${COLORS.white} 25%,
        ${hexToRgba(COLORS.greenTeal, 0.3)} 50%,
        ${COLORS.white} 85%
    )`,
} as const;

export const FONTS = {
    poppins: 'Poppins, sans-serif',
} as const;

export const BREAKPOINTS = {
    phone: 425,
    tablet: 768,
} as const;

export const MEDIA = {
    phone: `(max-width: ${BREAKPOINTS.phone}px)`,
    tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
    desktop: `(min-width: ${BREAKPOINTS.tablet}px)`,
} as const;

export const MIXINS = {
    headerText: `
        background: ${GRADIENTS.headerText};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `,
} as const;
