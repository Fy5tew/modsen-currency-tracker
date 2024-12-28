import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '#/store';
import { ConverterDialog } from '#components/ConverterDialog';
import { QuoteCard } from '#components/QuoteCard';
import { QuoteList } from '#components/QuoteList';
import { UpdatedStatus } from '#components/UpdatedStatus';
import { CURRENCIES, STOCKS } from '#constants/quotes';

export function Home() {
    const [convertCurrency, setConvertCurrency] = useState(CURRENCIES.USD.code);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const lastUpdated = useSelector(
        (state: RootState) => state.currency.lastUpdated
    );

    const handleQuoteCardClick = (currencyCode: string) => {
        setConvertCurrency(currencyCode);
        setIsModalOpen(true);
    };

    return (
        <>
            <UpdatedStatus lastUpdated={new Date(lastUpdated)} />
            <QuoteList title="Stocks">
                {Object.values(STOCKS).map(({ code, title, icon }) => (
                    <QuoteCard
                        key={code}
                        code={code}
                        title={title}
                        text="15%"
                        iconSrc={icon}
                    />
                ))}
            </QuoteList>
            <QuoteList title="Quotes">
                {Object.values(CURRENCIES).map(
                    ({ code, title, symbol, icon }) => (
                        <QuoteCard
                            key={code}
                            code={code}
                            title={title}
                            text={`${symbol} 77,8`}
                            iconSrc={icon}
                            onClick={() => handleQuoteCardClick(code)}
                        />
                    )
                )}
            </QuoteList>
            <ConverterDialog
                currencyCode={convertCurrency}
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
