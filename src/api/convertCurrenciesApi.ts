import {
    COINAPI_API_CONVERT_URL,
    COINAPI_API_KEY,
    COINAPI_API_KEY_HEADER,
} from '#constants/api';
import { CoinApiConvertResponce, CoinApiErrorResponce } from '#types/api';
import { formatTemplate } from '#utils/formatTemplate';

export async function convertCurrenciesApi(
    value: number,
    from: string,
    to: string
): Promise<number> {
    const urlConfig = {
        from,
        to,
    };
    const apiUrl = formatTemplate(COINAPI_API_CONVERT_URL, urlConfig);

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

    const json: CoinApiConvertResponce = await response.json();

    return value * json.rate;
}
