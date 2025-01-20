export const COINAPI_API_BASE_URL = 'https://rest.coinapi.io/v1';
export const COINAPI_API_RATES_URL = `${COINAPI_API_BASE_URL}/exchangerate/{baseCurrency}?filter_asset_id={currencies}&invert={invert}`;
export const COINAPI_API_CONVERT_URL = `${COINAPI_API_BASE_URL}/exchangerate/{from}/{to}`;
export const COINAPI_API_HISTORY_URL = `${COINAPI_API_BASE_URL}/exchangerate/{currency}/{baseCurrency}/history?period_id={period}&time_start={start}&time_end={end}&limit={limit}`;

export const COINAPI_API_KEY_HEADER = 'X-CoinAPI-Key';

export const COINAPI_API_KEY = process.env.COINAPI_API_KEY ?? '';

export const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY ?? '';
