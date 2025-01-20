export function formatPrice(price: number, decimalPlaces: number = 2) {
    const fractionZerosRegexp = /\.(0*)[1-9]/;

    const zerosLength =
        price.toString().match(fractionZerosRegexp)?.[1].length || 0;

    const options: Intl.NumberFormatOptions = {
        style: 'decimal',
        useGrouping: true,
        maximumFractionDigits: zerosLength + decimalPlaces,
    };

    const formatter = new Intl.NumberFormat('ru', options);

    const formatted = formatter.format(price);

    return formatted;
}
