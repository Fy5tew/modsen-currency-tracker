export type Bank = {
    id: string;
    title: string;
    address: string;
    currencies: string[];
    location: {
        latitude: number;
        longitude: number;
    };
};

export type BankState = {
    selectedCurrency: null | string;
    banks: Bank[];
    lastUpdated: number;
    isLoading: boolean;
    error: null | string;
};

export enum BankActionType {
    BANK_SET_SELECTED_CURRENCY = 'BANK_SET_SELECTED_CURRENCY',
    BANK_FETCH = 'BANK_FETCH',
    BANK_FETCH_SUCCESS = 'BANK_FETCH_SUCCESS',
    BANK_FETCH_ERROR = 'BANK_FETCH_ERROR',
}

export type BankSetSelectedCurrencyAction = {
    type: BankActionType.BANK_SET_SELECTED_CURRENCY;
    payload: null | string;
};

export type BankFetchAction = {
    type: BankActionType.BANK_FETCH;
};

export type BankFetchSuccessAction = {
    type: BankActionType.BANK_FETCH_SUCCESS;
    payload: Bank[];
};

export type BankFetchErrorAction = {
    type: BankActionType.BANK_FETCH_ERROR;
    payload: string;
};

export type BankAction =
    | BankSetSelectedCurrencyAction
    | BankFetchAction
    | BankFetchSuccessAction
    | BankFetchErrorAction;
