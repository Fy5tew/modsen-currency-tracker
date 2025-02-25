import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '#/store';
import { fetchCurrenciesPrice } from '#/store/actions/currency';
import { ConverterDialog } from '#components/ConverterDialog';
import { QuoteCard } from '#components/QuoteCard';
import { QuoteList } from '#components/QuoteList';
import { UpdatedStatus } from '#components/UpdatedStatus';
import { CURRENCIES } from '#constants/quotes';
import { formatPrice } from '#utils/formatPrice';

export function Home() {
    const dispatch = useAppDispatch();

    const stocks = useAppSelector((state) => state.stock.stocks);
    const { lastUpdated, defaultCurrency, currencies, isLoading, error } =
        useAppSelector((state) => state.currency);

    const [convertCurrency, setConvertCurrency] = useState(defaultCurrency);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleQuoteCardClick = (currencyCode: string) => {
        setConvertCurrency(currencyCode);
        setIsModalOpen(true);
    };

    useEffect(() => {
        dispatch(fetchCurrenciesPrice());

        const interval = setInterval(() => {
            dispatch(fetchCurrenciesPrice());
        }, 300000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <>
            <UpdatedStatus lastUpdated={new Date(lastUpdated)} />
            <QuoteList title="Stocks">
                {stocks.map(({ code, title, rate, icon }) => (
                    <QuoteCard
                        key={code}
                        code={code}
                        title={title}
                        text={`${rate}%`}
                        iconSrc={icon}
                    />
                ))}
            </QuoteList>
            <QuoteList
                title="Quotes"
                error={error && `Error while loading data: ${error}`}
            >
                {currencies.map(({ code, title, price, icon }) => (
                    <QuoteCard
                        key={code}
                        code={code}
                        title={title}
                        text={
                            isLoading
                                ? 'Loading...'
                                : `${CURRENCIES[defaultCurrency].symbol} ${formatPrice(price, 2)}`
                        }
                        iconSrc={icon}
                        onClick={() => handleQuoteCardClick(code)}
                    />
                ))}
            </QuoteList>
            <ConverterDialog
                currencyCode={convertCurrency}
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
