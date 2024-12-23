import { createGlobalStyle } from 'styled-components';

import { FONTS } from './constants/styles';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${FONTS.poppins};
    }

    body {
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.backgroundColor};

        transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
    }
    
    html {
        min-height: 100%;
        scrollbar-gutter: stable;
    }

    body, #root {
        min-height: 100%;
    }

    body:has(#modal-root dialog[open]) {
        overflow: hidden;
    }
`;
