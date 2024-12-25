export type StockInfo = {
    code: string;
    title: string;
    icon: string;
};

export type StockRate = {
    code: string;
    rate: number;
};

export type Stock = StockInfo & StockRate;

export type StockState = {
    stocks: Stock[];
};
