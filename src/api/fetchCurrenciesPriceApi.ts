import { COINAPI_API_RATES_URL } from '#constants/api';
import { CoinApiRatesResponce } from '#types/api';
import { CurrencyPrice } from '#types/currency';
import { formatTemplate } from '#utils/formatTemplate';

import { coinApiRequest } from './coinapi';

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

    const json = await coinApiRequest<CoinApiRatesResponce>(apiUrl);

    return currencies.map((currency) => ({
        code: currency,
        price:
            json.rates.find((rate) => rate.asset_id_quote === currency)?.rate ??
            0,
    }));
}
