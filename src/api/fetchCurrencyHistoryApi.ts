import { COINAPI_API_HISTORY_URL } from '#constants/api';
import { CoinApiHistoryResponce, CoinApiTimeseriesPeriod } from '#types/api';
import { History } from '#types/history';
import { formatTemplate } from '#utils/formatTemplate';

import { coinApiRequest } from './coinapi';

type FetchCurrencyHistoryParams = {
    baseCurrency: string;
    currency: string;
    period: CoinApiTimeseriesPeriod;
    start: Date | string | number;
    end: Date | string | number;
    limit: number;
};

export async function fetchCurrencyHistoryApi({
    baseCurrency,
    currency,
    period,
    start,
    end,
    limit,
}: FetchCurrencyHistoryParams): Promise<History[]> {
    const urlConfig = {
        baseCurrency,
        currency,
        period,
        start: new Date(start).toISOString(),
        end: new Date(end).toISOString(),
        limit: limit.toString(),
    };

    const apiUrl = formatTemplate(COINAPI_API_HISTORY_URL, urlConfig);

    const json = await coinApiRequest<CoinApiHistoryResponce>(apiUrl);

    return json.map(
        ({
            time_period_start,
            rate_open,
            rate_high,
            rate_low,
            rate_close,
        }) => ({
            timestamp: new Date(time_period_start).getTime(),
            rate_open,
            rate_high,
            rate_low,
            rate_close,
        })
    );
}
