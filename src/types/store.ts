import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { rootReducer } from '#/store/reducers';

import { BankAction } from './bank';
import { CurrencyAction } from './currency';
import { HistoryAction } from './history';

export type AppState = ReturnType<typeof rootReducer>;

export type AppAction = CurrencyAction | HistoryAction | BankAction;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    AppAction
>;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppAction>;
