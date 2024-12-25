import {
    COINAPI_API_KEY,
    COINAPI_API_KEY_HEADER,
    COINAPI_API_RATES_URL,
} from '#constants/api';
import { CoinApiErrorResponce, CoinApiRatesResponce } from '#types/api';
import { CurrencyPrice } from '#types/currency';
import { formatTemplate } from '#utils/formatTemplate';

export async function fetchCurrenciesPriceApi(
    baseCurrency: string,
    currencies: string[]
): Promise<CurrencyPrice[]> {
    const urlConfig = {
        baseCurrency,
        currencies: currencies.join(','),
        invert: 'true',
    };
    const apiUrl = formatTemplate(COINAPI_API_RATES_URL, urlConfig);

    const headers = new Headers({
        [COINAPI_API_KEY_HEADER]: COINAPI_API_KEY,
    });

    const response = await fetch(apiUrl, {
        headers,
    });

    if (!response.ok) {
        const json: CoinApiErrorResponce = await response.json();
        throw new Error(json.error);
    }

    const json: CoinApiRatesResponce = await response.json();

    return currencies.map((currency) => ({
        code: currency,
        price:
            json.rates.find((rate) => rate.asset_id_quote === currency)?.rate ??
            0,
    }));
}
