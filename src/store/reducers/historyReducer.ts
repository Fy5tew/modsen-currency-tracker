import { HistoryAction, HistoryActionType, HistoryState } from '#types/history';

const initialState: HistoryState = {
    selectedCurrency: null,
    history: [],
    lastUpdated: -1,
    isLoading: false,
    error: null,
};

export function historyReducer(
    state = initialState,
    action: HistoryAction
): HistoryState {
    switch (action.type) {
        case HistoryActionType.HISTORY_SET_SELECTED_CURRENCY:
            return { ...state, selectedCurrency: action.payload };
        case HistoryActionType.HISTORY_FETCH:
            return { ...state, isLoading: true, error: null };
        case HistoryActionType.HISTORY_FETCH_SUCCESS:
            return {
                ...state,
                history: action.payload,
                lastUpdated: Date.now(),
                isLoading: false,
            };
        case HistoryActionType.HISTORY_FETCH_ERROR:
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
