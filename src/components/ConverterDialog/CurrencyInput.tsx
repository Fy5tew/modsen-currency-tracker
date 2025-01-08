import { ComponentProps } from 'react';

import { formatPrice } from '#utils/formatPrice';

import { Input, InputFormattedText, InputWrapper, Label } from './styled';

type CurrencyInputProps = ComponentProps<typeof Input> & {
    value: number;
};

export function CurrencyInput({
    value,
    children,
    ...props
}: CurrencyInputProps) {
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
