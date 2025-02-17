import { ChangeEvent, Component, createRef } from 'react';
import { connect } from 'react-redux';

import { Select } from '#/components/Select';
import { AppDispatch, AppState } from '#/types/store';
import { CandlestickChart } from '#components/CandlestickChart';
import { ChartInfoDialog } from '#components/ChartInfoDialog';
import { UpdatedStatus } from '#components/UpdatedStatus';
import { setSelectedCurrency, setSelectedDays } from '#store/actions/history';
import { fetchCurrencyHistory } from '#store/actions/history';
import { History } from '#types/history';

import { ControlsWrapper, ErrorMessage, InfoMessage } from './styled';

const DAYS_SELECT_VALUES = [
    {
        title: '3 days',
        value: 3,
    },
    {
        title: '7 days',
        value: 7,
    },
    {
        title: '14 days',
        value: 14,
    },
    {
        title: '30 days',
        value: 30,
    },
];

type TimelineProps = {
    lastUpdated: number;
    currencies: Array<{ code: string; symbol: string; title: string }>;
    selectedCurrency: string;
    selectedDays: number;
    currencyHistory: History[];
    isLoading: boolean;
    error: string | null;
    fetchCurrencyHistory: () => void;
    setSelectedCurrency: (currency: string) => void;
    setSelectedDays: (days: number) => void;
};

type TimelineState = {
    isDialogOpen: boolean;
};

class TimelinePage extends Component<TimelineProps, TimelineState> {
    interval: NodeJS.Timeout | null = null;
    chartRef = createRef<CandlestickChart>();

    constructor(props: TimelineProps) {
        super(props);
        this.state = { isDialogOpen: false };
    }

    componentDidMount() {
        if (this.chartRef.current) {
            this.chartRef.current.subscribeObserver(() => {
                this.openDialog();
            });
        }

        this.props.fetchCurrencyHistory();
        this.startInterval();
    }

    componentDidUpdate(prevProps: TimelineProps) {
        if (
            prevProps.selectedCurrency !== this.props.selectedCurrency ||
            prevProps.selectedDays !== this.props.selectedDays
        ) {
            this.props.fetchCurrencyHistory();
        }
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    startInterval() {
        this.interval = setInterval(() => {
            this.props.fetchCurrencyHistory();
        }, 600000);
    }

    clearInterval() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    handleSelectedCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        this.props.setSelectedCurrency(event.target.value);
    };

    handleSelectedDaysChange = (event: ChangeEvent<HTMLSelectElement>) => {
        this.props.setSelectedDays(+event.target.value);
    };

    openDialog = () => this.setState({ isDialogOpen: true });

    closeDialog = () => this.setState({ isDialogOpen: false });

    render() {
        const {
            lastUpdated,
            currencies,
            selectedCurrency,
            selectedDays,
            currencyHistory,
            isLoading,
            error,
        } = this.props;

        let message;
        if (isLoading) {
            message = <InfoMessage>Loading...</InfoMessage>;
        } else if (error) {
            message = <ErrorMessage>{error}</ErrorMessage>;
        } else {
            message = <InfoMessage>&nbsp;</InfoMessage>;
        }

        return (
            <>
                <UpdatedStatus lastUpdated={new Date(lastUpdated)} />
                <ControlsWrapper>
                    <Select
                        options={currencies.map(({ code, symbol, title }) => ({
                            value: code,
                            title: `${symbol} ${title}`,
                        }))}
                        value={selectedCurrency}
                        onChange={this.handleSelectedCurrencyChange}
                        disabled={isLoading}
                    />
                    <Select
                        options={DAYS_SELECT_VALUES.map(({ value, title }) => ({
                            value: value,
                            title: title,
                        }))}
                        value={selectedDays}
                        onChange={this.handleSelectedDaysChange}
                        disabled={isLoading}
                    />
                    {message}
                </ControlsWrapper>
                <CandlestickChart
                    ref={this.chartRef}
                    data={currencyHistory.map(
                        ({
                            timestamp,
                            rate_open,
                            rate_high,
                            rate_low,
                            rate_close,
                        }) => ({
                            x: timestamp,
                            o: rate_open,
                            h: rate_high,
                            l: rate_low,
                            c: rate_close,
                        })
                    )}
                />
                <ChartInfoDialog
                    open={this.state.isDialogOpen}
                    onClose={this.closeDialog}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    lastUpdated: state.history.lastUpdated,
    currencies: state.currency.currencies.filter(
        ({ code }) => code !== state.currency.defaultCurrency
    ),
    selectedCurrency: state.history.selectedCurrency,
    selectedDays: state.history.selectedDays,
    currencyHistory: state.history.history,
    isLoading: state.history.isLoading,
    error: state.history.error,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchCurrencyHistory: () => dispatch(fetchCurrencyHistory()),
    setSelectedCurrency: (currency: string) =>
        dispatch(setSelectedCurrency(currency)),
    setSelectedDays: (days: number) => dispatch(setSelectedDays(days)),
});

export const Timeline = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimelinePage);
