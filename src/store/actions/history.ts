import { fetchCurrencyHistoryApi } from '#/api/fetchCurrencyHistoryApi';
import { AppThunk } from '#/types/store';
import { CoinApiTimeseriesPeriod } from '#types/api';
import {
    History,
    HistoryActionType,
    HistoryFetchAction,
    HistoryFetchErrorAction,
    HistoryFetchSuccessAction,
    HistorySetSelectedCurrencyAction,
    HistorySetSelectedDaysAction,
} from '#types/history';

export function setSelectedCurrency(
    currency: string
): HistorySetSelectedCurrencyAction {
    return {
        type: HistoryActionType.HISTORY_SET_SELECTED_CURRENCY,
        payload: currency,
    };
}

export function setSelectedDays(days: number): HistorySetSelectedDaysAction {
    return {
        type: HistoryActionType.HISTORY_SET_SELECTED_DAYS,
        payload: days,
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

export function fetchCurrencyHistory(): AppThunk {
    return async function (dispatch, getState) {
        try {
            dispatch(fetchHistory());

            const baseCurrency = getState().currency.defaultCurrency;
            const currency = getState().history.selectedCurrency;
            const selectedDays = getState().history.selectedDays;
            const period = CoinApiTimeseriesPeriod.HRS_3;

            const now = new Date();
            const endDate = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                23,
                59,
                59,
                999
            );
            const startDate = new Date(
                endDate.getTime() - selectedDays * 24 * 60 * 60 * 1000
            );

            const history = await fetchCurrencyHistoryApi({
                baseCurrency,
                currency,
                start: startDate,
                end: endDate,
                period: period,
                limit: 1000,
            });

            dispatch(fetchHistorySuccess(history));
        } catch (error) {
            dispatch(fetchHistoryError((error as Error).message));
        }
    };
}
