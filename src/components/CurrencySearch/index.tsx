import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '#/store';
import { useOnClickOutside } from '#hooks/useOnCLickOutside';

import {
    ButtonContent,
    Input,
    InputWrapper,
    Option,
    OptionsContainer,
    OptionsWrapper,
    ResetButton,
    Wrapper,
} from './styled';

type CurrencyTitle = {
    code: string;
    title: string;
};

type CurrencySearchProps = {
    selectedCurrency: string | null;
    selectCurrency: (newCurrency: string | null) => void;
};

export function CurrencySearch({
    selectedCurrency,
    selectCurrency,
}: CurrencySearchProps) {
    const currencies = useSelector(
        (state: RootState) => state.currency.currencies
    );
    const titles: CurrencyTitle[] = useMemo(
        () =>
            currencies.map(({ code, title, symbol }) => ({
                code,
                title: `${symbol} ${title} (${code})`,
            })),
        [currencies]
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const [query, setQuery] = useState('');
    const [filteredTitles, setFilteredTitles] = useState<CurrencyTitle[]>([]);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    useEffect(() => {
        if (selectedCurrency) {
            setQuery(
                titles.find(({ code }) => code === selectedCurrency)?.title ??
                    ''
            );
        }
    }, [selectedCurrency, titles]);

    useEffect(() => {
        const searchRegex = new RegExp(
            query
                .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                .split(/\s+/)
                .map((word) => `(?=.*${word})`)
                .join(''),
            'i'
        );
        const filtered = titles.filter(({ title }) => searchRegex.test(title));

        if (!query) {
            setFilteredTitles(titles);
        } else if (
            filtered.length === 1 &&
            filtered[0].code === selectedCurrency &&
            filtered[0].title === query
        ) {
            setFilteredTitles([]);
        } else {
            setFilteredTitles(filtered);
        }
    }, [query, titles, selectedCurrency, selectCurrency]);

    useOnClickOutside(wrapperRef, () => {
        setIsOptionsOpen(false);
    });

    const handleInputFocus = () => {
        setIsOptionsOpen(true);
    };

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleQueryClear = () => {
        setQuery('');
        selectCurrency(null);
    };

    const handleCurrencySelect = (currencyCode: string) => {
        selectCurrency(currencyCode);
    };

    return (
        <Wrapper ref={wrapperRef}>
            <InputWrapper>
                <Input
                    value={query}
                    onChange={handleQueryChange}
                    onFocus={handleInputFocus}
                    placeholder="Select currency"
                />
                <ResetButton onClick={handleQueryClear}>
                    <ButtonContent>×</ButtonContent>
                </ResetButton>
            </InputWrapper>
            <OptionsWrapper data-open={isOptionsOpen}>
                <OptionsContainer>
                    {filteredTitles.map(({ code, title }) => (
                        <Option
                            key={code}
                            onClick={() => handleCurrencySelect(code)}
                        >
                            {title}
                        </Option>
                    ))}
                </OptionsContainer>
            </OptionsWrapper>
        </Wrapper>
    );
}
