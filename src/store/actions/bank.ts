import {
    Bank,
    BankActionType,
    BankFetchAction,
    BankFetchErrorAction,
    BankFetchSuccessAction,
    BankSetSelectedCurrencyAction,
} from '#types/bank';

export function setSelectedCurrency(
    currency: string
): BankSetSelectedCurrencyAction {
    return {
        type: BankActionType.BANK_SET_SELECTED_CURRENCY,
        payload: currency,
    };
}

export function fetchBank(): BankFetchAction {
    return {
        type: BankActionType.BANK_FETCH,
    };
}

export function fetchBankSuccess(banks: Bank[]): BankFetchSuccessAction {
    return {
        type: BankActionType.BANK_FETCH_SUCCESS,
        payload: banks,
    };
}

export function fetchBankError(error: string): BankFetchErrorAction {
    return {
        type: BankActionType.BANK_FETCH_ERROR,
        payload: error,
    };
}
