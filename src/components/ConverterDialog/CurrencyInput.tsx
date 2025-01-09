import { ChangeEvent, ComponentProps, useEffect, useState } from 'react';

import { formatPrice } from '#utils/formatPrice';

import {
    Input,
    InputFormattedText,
    InputFormattedTextWrapper,
    InputWrapper,
    Label,
} from './styled';

const ZERO_VALUE = '0';
const MIN_INPUT_VALUE = 0;
const INPUT_STEP = 0.5;
const MAX_INPUT_LENGTH = 13;
const FORMATING_DECIMAL_PLACES = 5;

type CurrencyInputProps = Omit<
    ComponentProps<typeof Input>,
    'value' | 'onChange'
> & {
    value: number;
    onChange?: (value: number) => void;
};

function formatValue(value: string): string {
    let val = value.toString();

    if (!val) {
        val = ZERO_VALUE;
    }
    if (val.startsWith(ZERO_VALUE)) {
        val = (+val).toString();
    }
    val = val.slice(0, MAX_INPUT_LENGTH);

    return val;
}

export function CurrencyInput({
    value: initialValue,
    children,
    onChange,
    ...props
}: CurrencyInputProps) {
    const [value, setValue] = useState(ZERO_VALUE);

    useEffect(() => {
        setValue((value) => {
            if (initialValue === +value) {
                return value;
            }
            return formatValue(initialValue.toString());
        });
    }, [initialValue]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = formatValue(event.target.value);

        setValue(val);
        onChange?.call({}, +val);
    };

    return (
        <Label>
            <InputWrapper>
                <Input
                    type="number"
                    value={value}
                    min={MIN_INPUT_VALUE}
                    step={INPUT_STEP}
                    onChange={handleChange}
                    {...props}
                />
                <InputFormattedTextWrapper>
                    <InputFormattedText>
                        {formatPrice(+value, FORMATING_DECIMAL_PLACES)}
                    </InputFormattedText>
                </InputFormattedTextWrapper>
            </InputWrapper>
            {children}
        </Label>
    );
}
