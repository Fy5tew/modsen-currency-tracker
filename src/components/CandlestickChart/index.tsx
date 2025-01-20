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
    NOTIFICATION_THRESHOLD,
} from './config';
import { Canvas, Wrapper } from './styled';

Chart.register(...registerables, CandlestickController, CandlestickElement);

type CandlestickChartProps = {
    data: FinancialDataPoint[];
};

type CandlestickChartObserver = () => void;

export class CandlestickChart extends Component<CandlestickChartProps> {
    static contextType = ThemeContext;
    observers: CandlestickChartObserver[] = [];
    dataChanged = false;
    chartRef = createRef<HTMLCanvasElement>();
    chartInstance: CandlestickChartType | null = null;

    componentDidMount() {
        this.initializeChart();
    }

    componentDidUpdate(prevProps: CandlestickChartProps) {
        if (
            JSON.stringify(this.props.data) !== JSON.stringify(prevProps.data)
        ) {
            this.dataChanged = true;
        }
        this.initializeChart();
    }

    componentWillUnmount() {
        this.destroyChart();
    }

    subscribeObserver(observer: CandlestickChartObserver) {
        this.observers.push(observer);
    }

    unsubscribeObserver(observer: CandlestickChartObserver) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach((observer) => observer());
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

        if (
            this.dataChanged &&
            this.props.data.length >= NOTIFICATION_THRESHOLD
        ) {
            this.notifyObservers();
        }

        this.dataChanged = false;
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
