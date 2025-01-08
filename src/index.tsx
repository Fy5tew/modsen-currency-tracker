import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ROOT_ELEMENT_ID } from '#constants/dom';
import { MenuProvider } from '#contexts/menu';
import { ThemeProvider } from '#contexts/theme';

import { GlobalStyles } from './globalStyles';
import { Router } from './router';
import { store } from './store';

const root = ReactDOM.createRoot(
    document.getElementById(ROOT_ELEMENT_ID) as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <MenuProvider>
                    <BrowserRouter>
                        <GlobalStyles />
                        <Router />
                    </BrowserRouter>
                </MenuProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
