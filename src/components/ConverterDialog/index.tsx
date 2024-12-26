import { ChangeEvent, ComponentProps } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getConversionRateApi } from '#/api/getConversionRateApi';
import { RootState } from '#/store';
import { Dialog } from '#components/Dialog';
import { CURRENCIES } from '#constants/quotes';
import { formatPrice } from '#utils/formatPrice';

import {
    CloseButton,
    ErrorMessage,
    InfoMessage,
    Input,
    InputFormattedText,
    InputWrapper,
    Label,
    LabelSubText,
    Option,
    Select,
    Title,
    Wrapper,
} from './styled';

type CurrencyInputProps = ComponentProps<typeof Input> & {
    value: number;
};

type ConverterDialogProps = ComponentProps<typeof Dialog> & {
    currencyCode: string;
};

function CurrencyInput({ value, children, ...props }: CurrencyInputProps) {
    return (
        <Label>
            <InputWrapper>
                <Input
                    type="number"
                    value={value}
                    min={0}
                    step={0.5}
                    {...props}
                />
                <InputFormattedText>{formatPrice(value, 5)}</InputFormattedText>
            </InputWrapper>
            {children}
        </Label>
    );
}

export function ConverterDialog({
    currencyCode,
    onClose,
    ...props
}: ConverterDialogProps) {
    const fromCurrency = CURRENCIES[currencyCode];

    const currencies = useSelector((state: RootState) =>
        state.currency.currencies.filter(({ code }) => code !== currencyCode)
    );

    const [toCurrencyCode, setToCurrencyCode] = useState(currencies[0].code);
    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [rate, setRate] = useState(1);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        getConversionRateApi(fromCurrency.code, toCurrencyCode)
            .then((rate) => setRate(rate))
            .catch((error) => setError(error.message));
    }, [fromCurrency.code, toCurrencyCode]);

    useEffect(() => {
        setToValue(fromValue * rate);
    }, [fromValue, rate]);

    const handleFromValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        setFromValue(value);
        setToValue(value * rate);
    };

    const handleToValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        setToValue(value);
        setFromValue(value / rate);
    };

    const handleToCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setToCurrencyCode(event.target.value);
    };

    return (
        <Dialog {...props} onClose={onClose}>
            <Wrapper>
                <Title>Currency Converter</Title>
                <CurrencyInput
                    value={fromValue}
                    onChange={handleFromValueChange}
                >
                    <LabelSubText>
                        {fromCurrency.symbol} {fromCurrency.title}
                    </LabelSubText>
                </CurrencyInput>
                <CurrencyInput value={toValue} onChange={handleToValueChange}>
                    <Select
                        value={toCurrencyCode}
                        onChange={handleToCurrencyChange}
                    >
                        {currencies.map(({ code, symbol, title }) => (
                            <Option key={code} value={code}>
                                {symbol} {title}
                            </Option>
                        ))}
                    </Select>
                </CurrencyInput>
                {error ? (
                    <ErrorMessage>{error}</ErrorMessage>
                ) : (
                    <InfoMessage>
                        1 {fromCurrency.code} ≈ {formatPrice(rate, 2)}{' '}
                        {toCurrencyCode}
                    </InfoMessage>
                )}
                <CloseButton onClick={onClose}>Close</CloseButton>
            </Wrapper>
        </Dialog>
    );
}
