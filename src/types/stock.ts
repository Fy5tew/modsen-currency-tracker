export type Stock = {
    code: string;
    title: string;
    icon: string;
};

export type StockRate = {
    code: string;
    rate: number;
};

export type StockState = {
    stocks: StockRate[];
};
