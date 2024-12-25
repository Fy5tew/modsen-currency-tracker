import { COINAPI_API_CONVERT_URL } from '#constants/api';
import { CoinApiConvertResponce } from '#types/api';
import { formatTemplate } from '#utils/formatTemplate';

import { coinApiRequest } from './coinapi';

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

    const json = await coinApiRequest<CoinApiConvertResponce>(apiUrl);

    return value * json.rate;
}
