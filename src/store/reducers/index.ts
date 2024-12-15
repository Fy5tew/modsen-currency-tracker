import { combineReducers } from 'redux';

import { bankReducer } from './bankReducer';
import { currencyReducer } from './currencyReducer';
import { historyReducer } from './historyReducer';
import { stockReducer } from './stockReducer';

export const rootReducer = combineReducers({
    stock: stockReducer,
    currency: currencyReducer,
    history: historyReducer,
    bank: bankReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
