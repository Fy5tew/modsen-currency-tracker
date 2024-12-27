export enum CoinApiTimeseriesPeriod {
    SEC_1 = '1SEC',
    SEC_2 = '2SEC',
    SEC_3 = '3SEC',
    SEC_4 = '4SEC',
    SEC_5 = '5SEC',
    SEC_6 = '6SEC',
    SEC_10 = '10SEC',
    SEC_15 = '15SEC',
    SEC_20 = '20SEC',
    SEC_30 = '30SEC',
    MIN_1 = '1MIN',
    MIN_2 = '2MIN',
    MIN_3 = '3MIN',
    MIN_4 = '4MIN',
    MIN_5 = '5MIN',
    MIN_6 = '6MIN',
    MIN_10 = '10MIN',
    MIN_15 = '15MIN',
    MIN_20 = '20MIN',
    MIN_30 = '30MIN',
    HRS_1 = '1HRS',
    HRS_2 = '2HRS',
    HRS_3 = '3HRS',
    HRS_4 = '4HRS',
    HRS_6 = '6HRS',
    HRS_8 = '8HRS',
    HRS_12 = '12HRS',
    DAY_1 = '1DAY',
    DAY_2 = '2DAY',
    DAY_3 = '3DAY',
    DAY_5 = '5DAY',
    DAY_7 = '7DAY',
    DAY_10 = '10DAY',
}

export type CoinApiErrorResponce = {
    error: string;
};

export type CoinApiRatesResponce = {
    rates: { asset_id_quote: string; rate: number }[];
};

export type CoinApiConvertResponce = {
    rate: number;
};

export type CoinApiHistoryResponce = {
    time_period_start: string;
    time_period_end: string;
    time_open: string;
    time_close: string;
    rate_open: number;
    rate_high: number;
    rate_low: number;
    rate_close: number;
}[];
