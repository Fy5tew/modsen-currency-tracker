import { ComponentProps } from 'react';

import { Dialog } from '#components/Dialog';
import { CURRENCIES } from '#constants/quotes';

import {
    CloseButton,
    Input,
    Label,
    LabelSubText,
    Option,
    Select,
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
    const selectedCurrency = CURRENCIES[currencyCode];

    return (
        <Dialog {...props} onClose={onClose}>
            <Wrapper>
                <Title>Currency Converter</Title>
                <Label>
                    <Input />
                    <LabelSubText>
                        {selectedCurrency.symbol} {selectedCurrency.title}
                    </LabelSubText>
                </Label>
                <Label>
                    <Input />
                    <Select>
                        {Object.values(CURRENCIES).map(
                            ({ code, symbol, title }) => (
                                <Option key={code} value={code}>
                                    {symbol} {title}
                                </Option>
                            )
                        )}
                    </Select>
                </Label>
                <CloseButton onClick={onClose}>Close</CloseButton>
            </Wrapper>
        </Dialog>
    );
}
