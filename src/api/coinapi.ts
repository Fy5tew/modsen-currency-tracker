import { COINAPI_API_KEY, COINAPI_API_KEY_HEADER } from '#constants/api';
import { CoinApiErrorResponce } from '#types/api';

export async function coinApiRequest<T>(url: string): Promise<T> {
    const headers = new Headers({
        [COINAPI_API_KEY_HEADER]: COINAPI_API_KEY,
    });

    const response = await fetch(url, {
        headers,
    });

    if (!response.ok) {
        const json: CoinApiErrorResponce = await response.json();
        throw new Error(json.error);
    }

    return await response.json();
}
