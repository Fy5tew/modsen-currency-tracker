import { Chart, ChartConfiguration, ChartData } from 'chart.js';
import { DefaultTheme } from 'styled-components';

import { COLORS } from '#/constants/styles';
import { formatPrice } from '#utils/formatPrice';
import { hexToRgba } from '#utils/hexToRgba';

export const PRICE_FRACTION_DIGITS = 2;
export const NOTIFICATION_THRESHOLD = 200;

export type CandlestickChart = Chart<'candlestick'>;

export type CandlestickChartConfiguration = ChartConfiguration<'candlestick'>;

export type CandlestickChartData = ChartData<
    'candlestick',
    FinancialDataPoint[]
>;

export type FinancialDataPoint = {
    x: number;
    o: number;
    h: number;
    l: number;
    c: number;
};

export function getOptions(
    theme: DefaultTheme
): CandlestickChartConfiguration['options'] {
    return {
        responsive: false,
        maintainAspectRatio: false,
        interaction: {
            mode: 'nearest',
            intersect: false,
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (tooltipItem) {
                        const candle = tooltipItem.raw as FinancialDataPoint;
                        return [
                            `Open: ${formatPrice(candle.o, PRICE_FRACTION_DIGITS)}`,
                            `High: ${formatPrice(candle.h, PRICE_FRACTION_DIGITS)}`,
                            `Low: ${formatPrice(candle.l, PRICE_FRACTION_DIGITS)}`,
                            `Close: ${formatPrice(candle.c, PRICE_FRACTION_DIGITS)}`,
                        ];
                    },
                },
            },
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                },
                grid: {
                    color: hexToRgba(theme.textColor, 0.1),
                },
                ticks: {
                    color: theme.textColor,
                },
                title: {
                    display: true,
                    text: 'Day',
                    color: theme.textColor,
                },
            },
            y: {
                grid: {
                    color: hexToRgba(theme.textColor, 0.1),
                },
                ticks: {
                    color: theme.textColor,
                },
                title: {
                    display: true,
                    text: 'Value',
                    color: theme.textColor,
                },
            },
        },
        layout: {
            padding: 20,
        },
    };
}

function getDatasets(
    data: FinancialDataPoint[],
    _: DefaultTheme
): CandlestickChartData {
    return {
        datasets: [
            {
                data: data,
                borderColor: (ctx) => {
                    const raw = ctx.raw as FinancialDataPoint;
                    if (!raw) {
                        return COLORS.monSoon;
                    }
                    if (raw.c > raw.o) {
                        return COLORS.darkMintGreen;
                    } else if (raw.c < raw.o) {
                        return COLORS.deepCarminePink;
                    } else {
                        return COLORS.monSoon;
                    }
                },
                barThickness: 3,
                backgroundColor: 'rgba(0,0,0,1)',
            },
        ],
    };
}

export function getConfig(
    data: FinancialDataPoint[],
    theme: DefaultTheme
): CandlestickChartConfiguration {
    return {
        type: 'candlestick',
        data: getDatasets(data, theme),
        options: getOptions(theme),
    };
}
