import { Action } from 'redux';

import { STOCKS } from '#constants/quotes';
import { StockState } from '#types/stock';

const initialState: StockState = {
    stocks: Object.values(STOCKS).map((stock) => ({
        code: stock.code,
        rate: 0,
    })),
};

export function stockReducer(state = initialState, action: Action): StockState {
    switch (action.type) {
        default:
            return state;
    }
}
