import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ROOT_ELEMENT_ID } from '#constants/dom';
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
                <BrowserRouter>
                    <GlobalStyles />
                    <Router />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
