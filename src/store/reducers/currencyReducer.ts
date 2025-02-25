import { CURRENCIES, DEFAULT_CURRENCY } from '#constants/quotes';
import {
    CurrencyAction,
    CurrencyActionType,
    CurrencyState,
} from '#types/currency';

const initialState: CurrencyState = {
    defaultCurrency: DEFAULT_CURRENCY.code,
    currencies: Object.values(CURRENCIES).map((currency) => ({
        ...currency,
        price: 0,
    })),
    lastUpdated: -1,
    isLoading: false,
    error: null,
};

export function currencyReducer(
    state = initialState,
    action: CurrencyAction
): CurrencyState {
    switch (action.type) {
        case CurrencyActionType.CURRENCY_SET_DEFAULT_CURRENCY:
            return { ...state, defaultCurrency: action.payload };
        case CurrencyActionType.CURRENCY_FETCH_PRICES:
            return { ...state, isLoading: true, error: null };
        case CurrencyActionType.CURRENCY_FETCH_PRICES_SUCCESS:
            return {
                ...state,
                currencies: state.currencies.map((currency) => ({
                    ...currency,
                    price:
                        action.payload.find(
                            (price) => price.code === currency.code
                        )?.price ?? 0,
                })),
                lastUpdated: Date.now(),
                isLoading: false,
            };
        case CurrencyActionType.CURRENCY_FETCH_PRICES_ERROR:
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
