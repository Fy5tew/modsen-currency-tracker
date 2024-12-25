export type CoinApiErrorResponce = {
    error: string;
};

export type CoinApiRatesResponce = {
    rates: { asset_id_quote: string; rate: number }[];
};

export type CoinApiConvertResponce = {
    rate: number;
};
