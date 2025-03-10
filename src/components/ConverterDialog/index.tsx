import { ChangeEvent, ComponentProps, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { getConversionRateApi } from '#/api/getConversionRateApi';
import { Select } from '#/components/Select';
import { useAppSelector } from '#/store';
import { CurrencyInput } from '#components/CurrencyInput';
import { Dialog } from '#components/Dialog';
import { CURRENCIES } from '#constants/quotes';
import { formatPrice } from '#utils/formatPrice';

import {
    CloseButton,
    ErrorMessage,
    InfoMessage,
    LabelSubText,
    Title,
    Wrapper,
} from './styled';

type ConverterDialogProps = ComponentProps<typeof Dialog> & {
    currencyCode: string;
};

export function ConverterDialog({
    currencyCode,
    onClose,
    ...props
}: ConverterDialogProps) {
    const fromCurrency = CURRENCIES[currencyCode];

    const currencies = useAppSelector((state) =>
        state.currency.currencies.filter(({ code }) => code !== currencyCode)
    );

    const [toCurrencyCode, setToCurrencyCode] = useState(currencies[0].code);
    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [rate, setRate] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        setLoading(true);
        getConversionRateApi(fromCurrency.code, toCurrencyCode)
            .then((rate) => {
                setRate(rate);
                setLoading(false);
            })
            .catch((error) => setError(error.message));
    }, [fromCurrency.code, toCurrencyCode]);

    useEffect(() => {
        setToValue(fromValue * rate);
    }, [fromValue, rate]);

    const handleFromValueChange = (value: number) => {
        setFromValue(value);
        setToValue(value * rate);
    };

    const handleToValueChange = (value: number) => {
        setToValue(value);
        setFromValue(value / rate);
    };

    const handleToCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setToCurrencyCode(event.target.value);
    };

    useEffect(() => {
        if (toCurrencyCode === currencyCode) {
            setToCurrencyCode(currencies[0].code);
        }
    }, [currencies, currencyCode, toCurrencyCode]);

    let Message: ReactNode;
    if (isLoading) {
        Message = <InfoMessage>Loading...</InfoMessage>;
    } else if (error) {
        Message = <ErrorMessage>{error}</ErrorMessage>;
    } else {
        Message = (
            <InfoMessage>
                1 {fromCurrency.code} ≈ {formatPrice(rate, 2)} {toCurrencyCode}
            </InfoMessage>
        );
    }

    return (
        <Dialog {...props} onClose={onClose}>
            <Wrapper>
                <Title>Currency Converter</Title>
                <CurrencyInput
                    value={fromValue}
                    onChange={handleFromValueChange}
                    disabled={isLoading}
                >
                    <LabelSubText>
                        {fromCurrency.symbol} {fromCurrency.title}
                    </LabelSubText>
                </CurrencyInput>
                <CurrencyInput
                    value={toValue}
                    onChange={handleToValueChange}
                    disabled={isLoading}
                >
                    <Select
                        options={currencies.map(({ code, symbol, title }) => ({
                            value: code,
                            title: `${symbol} ${title}`,
                        }))}
                        value={toCurrencyCode}
                        onChange={handleToCurrencyChange}
                        disabled={isLoading}
                    />
                </CurrencyInput>
                {Message}
                <CloseButton onClick={onClose}>Close</CloseButton>
            </Wrapper>
        </Dialog>
    );
}
