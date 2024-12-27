import 'chartjs-adapter-date-fns';

import { Chart, registerables } from 'chart.js';
import {
    CandlestickController,
    CandlestickElement,
} from 'chartjs-chart-financial';
import { Component, createRef } from 'react';

import { ThemeContext, ThemeContextType } from '#contexts/theme';

import {
    CandlestickChart as CandlestickChartType,
    FinancialDataPoint,
    getConfig,
} from './config';
import { Canvas, Wrapper } from './styled';

Chart.register(...registerables, CandlestickController, CandlestickElement);

type CandlestickChartProps = {
    data: FinancialDataPoint[];
};

export class CandlestickChart extends Component<CandlestickChartProps> {
    static contextType = ThemeContext;
    chartRef = createRef<HTMLCanvasElement>();
    chartInstance: CandlestickChartType | null = null;

    componentDidMount() {
        this.initializeChart();
    }

    componentDidUpdate() {
        this.initializeChart();
    }

    componentWillUnmount() {
        this.destroyChart();
    }

    initializeChart() {
        const canvas = this.chartRef.current;

        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d');

        if (!ctx) {
            return;
        }

        this.destroyChart();

        const theme = (this.context as ThemeContextType).theme;
        const config = getConfig(this.props.data, theme);
        this.chartInstance = new Chart(ctx as CanvasRenderingContext2D, config);
    }

    destroyChart() {
        if (this.chartInstance) {
            this.chartInstance.destroy();
            this.chartInstance = null;
        }
    }

    render() {
        return (
            <Wrapper>
                <Canvas ref={this.chartRef} width={1100} height={500}></Canvas>
            </Wrapper>
        );
    }
}
