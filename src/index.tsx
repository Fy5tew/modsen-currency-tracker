import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ROOT_ELEMENT_ID } from '#constants/dom';

import { Router } from './router';
import { store } from './store';

const root = ReactDOM.createRoot(
    document.getElementById(ROOT_ELEMENT_ID) as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
