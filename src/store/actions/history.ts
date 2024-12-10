import {
    History,
    HistoryActionType,
    HistoryFetchAction,
    HistoryFetchErrorAction,
    HistoryFetchSuccessAction,
    HistorySetSelectedCurrencyAction,
} from '#types/history';

export function setSelectedCurrency(
    currency: string
): HistorySetSelectedCurrencyAction {
    return {
        type: HistoryActionType.HISTORY_SET_SELECTED_CURRENCY,
        payload: currency,
    };
}

export function fetchHistory(): HistoryFetchAction {
    return {
        type: HistoryActionType.HISTORY_FETCH,
    };
}

export function fetchHistorySuccess(
    history: History[]
): HistoryFetchSuccessAction {
    return {
        type: HistoryActionType.HISTORY_FETCH_SUCCESS,
        payload: history,
    };
}

export function fetchHistoryError(error: string): HistoryFetchErrorAction {
    return {
        type: HistoryActionType.HISTORY_FETCH_ERROR,
        payload: error,
    };
}
