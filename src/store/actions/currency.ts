import {
    CurrencyActionType,
    CurrencyFetchPricesAction,
    CurrencyFetchPricesErrorAction,
    CurrencyFetchPricesSuccessAction,
    CurrencyPrice,
    CurrencySetDefaultCurrencyAction,
} from '#types/currency';

export function setDefaultCurrency(
    currency: string
): CurrencySetDefaultCurrencyAction {
    return {
        type: CurrencyActionType.CURRENCY_SET_DEFAULT_CURRENCY,
        payload: currency,
    };
}

export function fetchPrices(): CurrencyFetchPricesAction {
    return {
        type: CurrencyActionType.CURRENCY_FETCH_PRICES,
    };
}

export function fetchPricesSuccess(
    prices: CurrencyPrice[]
): CurrencyFetchPricesSuccessAction {
    return {
        type: CurrencyActionType.CURRENCY_FETCH_PRICES_SUCCESS,
        payload: prices,
    };
}

export function fetchPricesError(
    error: string
): CurrencyFetchPricesErrorAction {
    return {
        type: CurrencyActionType.CURRENCY_FETCH_PRICES_ERROR,
        payload: error,
    };
}
