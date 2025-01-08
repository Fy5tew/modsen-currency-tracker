import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnknownAction } from 'redux';

import { RootState } from '#/store';
import { fetchCurrenciesPrice } from '#/store/actions/currency';
import { ConverterDialog } from '#components/ConverterDialog';
import { QuoteCard } from '#components/QuoteCard';
import { QuoteList } from '#components/QuoteList';
import { UpdatedStatus } from '#components/UpdatedStatus';
import { CURRENCIES } from '#constants/quotes';
import { formatPrice } from '#utils/formatPrice';

export function Home() {
    const dispatch = useDispatch();

    const lastUpdated = useSelector(
        (state: RootState) => state.currency.lastUpdated
    );

    const defaultCurrency = useSelector(
        (state: RootState) => state.currency.defaultCurrency
    );

    const stocks = useSelector((state: RootState) => state.stock.stocks);

    const currencies = useSelector(
        (state: RootState) => state.currency.currencies
    );

    const isLoading = useSelector(
        (state: RootState) => state.currency.isLoading
    );

    const error = useSelector((state: RootState) => state.currency.error);

    const [convertCurrency, setConvertCurrency] = useState(defaultCurrency);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleQuoteCardClick = (currencyCode: string) => {
        setConvertCurrency(currencyCode);
        setIsModalOpen(true);
    };

    useEffect(() => {
        dispatch(fetchCurrenciesPrice() as unknown as UnknownAction);

        const interval = setInterval(() => {
            dispatch(fetchCurrenciesPrice() as unknown as UnknownAction);
        }, 300000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <>
            <UpdatedStatus lastUpdated={new Date(lastUpdated)} />
            <QuoteList title="Stocks">
                {stocks.map((stock) => (
                    <QuoteCard
                        key={stock.code}
                        code={stock.code}
                        title={stock.title}
                        text={`${stock.rate}%`}
                        iconSrc={stock.icon}
                    />
                ))}
            </QuoteList>
            <QuoteList
                title="Quotes"
                error={error && `Error while loading data: ${error}`}
            >
                {currencies.map((currency) => (
                    <QuoteCard
                        key={currency.code}
                        code={currency.code}
                        title={currency.title}
                        text={
                            isLoading
                                ? 'Loading...'
                                : `${CURRENCIES[defaultCurrency].symbol} ${formatPrice(currency.price, 2)}`
                        }
                        iconSrc={currency.icon}
                        onClick={() => handleQuoteCardClick(currency.code)}
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
