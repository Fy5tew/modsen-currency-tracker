import { getConversionRateApi } from './getConversionRateApi';

export async function convertCurrenciesApi(
    value: number,
    from: string,
    to: string
): Promise<number> {
    const rate = await getConversionRateApi(from, to);
    return value * rate;
}
