import { BANKS } from '#constants/banks';
import { BankAction, BankActionType, BankState } from '#types/bank';

const initialState: BankState = {
    selectedCurrency: null,
    banks: [...BANKS],
    lastUpdated: -1,
    isLoading: false,
    error: null,
};

export function bankReducer(
    state = initialState,
    action: BankAction
): BankState {
    switch (action.type) {
        case BankActionType.BANK_SET_SELECTED_CURRENCY:
            return { ...state, selectedCurrency: action.payload };
        case BankActionType.BANK_FETCH:
            return { ...state, isLoading: true, error: null };
        case BankActionType.BANK_FETCH_SUCCESS:
            return {
                ...state,
                banks: action.payload,
                lastUpdated: Date.now(),
                isLoading: false,
            };
        case BankActionType.BANK_FETCH_ERROR:
            return {
                ...state,
                lastUpdated: Date.now(),
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
