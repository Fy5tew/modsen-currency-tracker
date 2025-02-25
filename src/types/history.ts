export type History = {
    timestamp: number;
    rate_open: number;
    rate_high: number;
    rate_low: number;
    rate_close: number;
};

export type HistoryState = {
    selectedCurrency: string;
    selectedDays: number;
    history: History[];
    lastUpdated: number;
    isLoading: boolean;
    error: null | string;
};

export enum HistoryActionType {
    HISTORY_SET_SELECTED_CURRENCY = 'HISTORY_SET_SELECTED_CURRENCY',
    HISTORY_SET_SELECTED_DAYS = 'HISTORY_SET_SELECTED_DAYS',
    HISTORY_FETCH = 'HISTORY_FETCH',
    HISTORY_FETCH_SUCCESS = 'HISTORY_FETCH_SUCCESS',
    HISTORY_FETCH_ERROR = 'HISTORY_FETCH_ERROR',
}

export type HistorySetSelectedCurrencyAction = {
    type: HistoryActionType.HISTORY_SET_SELECTED_CURRENCY;
    payload: string;
};

export type HistorySetSelectedDaysAction = {
    type: HistoryActionType.HISTORY_SET_SELECTED_DAYS;
    payload: number;
};

export type HistoryFetchAction = {
    type: HistoryActionType.HISTORY_FETCH;
};

export type HistoryFetchSuccessAction = {
    type: HistoryActionType.HISTORY_FETCH_SUCCESS;
    payload: History[];
};

export type HistoryFetchErrorAction = {
    type: HistoryActionType.HISTORY_FETCH_ERROR;
    payload: string;
};

export type HistoryAction =
    | HistorySetSelectedCurrencyAction
    | HistorySetSelectedDaysAction
    | HistoryFetchAction
    | HistoryFetchSuccessAction
    | HistoryFetchErrorAction;
