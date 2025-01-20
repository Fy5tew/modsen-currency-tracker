export type CurrencyInfo = {
    code: string;
    symbol: string;
    title: string;
    icon: string;
};

export type CurrencyPrice = {
    code: string;
    price: number;
};

export type Currency = CurrencyInfo & CurrencyPrice;

export type CurrencyState = {
    defaultCurrency: string;
    currencies: Currency[];
    lastUpdated: number;
    isLoading: boolean;
    error: null | string;
};

export enum CurrencyActionType {
    CURRENCY_SET_DEFAULT_CURRENCY = 'CURRENCY_SET_DEFAULT_CURRENCY',
    CURRENCY_FETCH_PRICES = 'CURRENCY_FETCH_PRICES',
    CURRENCY_FETCH_PRICES_SUCCESS = 'CURRENCY_FETCH_PRICES_SUCCESS',
    CURRENCY_FETCH_PRICES_ERROR = 'CURRENCY_FETCH_PRICES_ERROR',
}

export type CurrencySetDefaultCurrencyAction = {
    type: CurrencyActionType.CURRENCY_SET_DEFAULT_CURRENCY;
    payload: string;
};

export type CurrencyFetchPricesAction = {
    type: CurrencyActionType.CURRENCY_FETCH_PRICES;
};

export type CurrencyFetchPricesSuccessAction = {
    type: CurrencyActionType.CURRENCY_FETCH_PRICES_SUCCESS;
    payload: CurrencyPrice[];
};

export type CurrencyFetchPricesErrorAction = {
    type: CurrencyActionType.CURRENCY_FETCH_PRICES_ERROR;
    payload: string;
};

export type CurrencyAction =
    | CurrencySetDefaultCurrencyAction
    | CurrencyFetchPricesAction
    | CurrencyFetchPricesSuccessAction
    | CurrencyFetchPricesErrorAction;
