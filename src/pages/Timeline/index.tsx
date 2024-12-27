import { ChangeEvent, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnknownAction } from 'redux';

import { RootState } from '#/store';
import { CandlestickChart } from '#components/CandlestickChart';
import { UpdatedStatus } from '#components/UpdatedStatus';
import { setSelectedCurrency, setSelectedDays } from '#store/actions/history';
import { fetchCurrencyHistory } from '#store/actions/history';

import {
    ControlsWrapper,
    ErrorMessage,
    InfoMessage,
    Option,
    Select,
} from './styled';

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

export function Timeline() {
    const dispatch = useDispatch();

    const lastUpdated = useSelector(
        (state: RootState) => state.history.lastUpdated
    );

    const currencies = useSelector((state: RootState) =>
        state.currency.currencies.filter(
            ({ code }) => code !== state.currency.defaultCurrency
        )
    );

    const selectedCurrency = useSelector(
        (state: RootState) => state.history.selectedCurrency
    );

    const selectedDays = useSelector(
        (state: RootState) => state.history.selectedDays
    );

    const currencyHistory = useSelector(
        (state: RootState) => state.history.history
    );

    const isLoading = useSelector(
        (state: RootState) => state.history.isLoading
    );

    const error = useSelector((state: RootState) => state.history.error);

    useEffect(() => {
        dispatch(fetchCurrencyHistory() as unknown as UnknownAction);

        const interval = setInterval(() => {
            dispatch(fetchCurrencyHistory() as unknown as UnknownAction);
        }, 600000);

        return () => clearInterval(interval);
    }, [dispatch, selectedCurrency, selectedDays]);

    const handleSelectedCurrencyChange = (
        event: ChangeEvent<HTMLSelectElement>
    ) => {
        dispatch(setSelectedCurrency(event.target.value));
    };

    const handleSelectedDaysChange = (
        event: ChangeEvent<HTMLSelectElement>
    ) => {
        dispatch(setSelectedDays(+event.target.value));
    };

    let message: ReactNode;
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
                    value={selectedCurrency}
                    onChange={handleSelectedCurrencyChange}
                    disabled={isLoading}
                >
                    {currencies.map(({ code, symbol, title }) => (
                        <Option key={code} value={code}>
                            {symbol} {title}
                        </Option>
                    ))}
                </Select>
                <Select
                    value={selectedDays}
                    onChange={handleSelectedDaysChange}
                    disabled={isLoading}
                >
                    {DAYS_SELECT_VALUES.map(({ title, value }) => (
                        <option key={value} value={value}>
                            {title}
                        </option>
                    ))}
                </Select>
                {message}
            </ControlsWrapper>
            <CandlestickChart
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
        </>
    );
}
