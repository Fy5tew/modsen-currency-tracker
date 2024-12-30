import { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { CurrencySearch } from '#/components/CurrencySearch';
import { UpdatedStatus } from '#/components/UpdatedStatus';
import { RootState } from '#/store';
import { setSelectedCurrency } from '#/store/actions/bank';
import { BankMap } from '#components/BankMap';
import { Bank } from '#types/bank';

import { Title, Wrapper } from './styled';

type BankCardProps = {
    lastUpdated: number;
    banks: Bank[];
    selectedCurrency: string | null;
    setSelectedCurrency: (currency: string | null) => void;
};

type BankCardState = {
    filteredBanks: Bank[];
};

class BankCardPage extends Component<BankCardProps, BankCardState> {
    constructor(props: BankCardProps) {
        super(props);
        this.state = {
            filteredBanks: this.props.banks,
        };
    }

    componentDidUpdate(prevProps: BankCardProps) {
        if (
            prevProps.selectedCurrency === this.props.selectedCurrency &&
            prevProps.banks === this.props.banks
        ) {
            return;
        }

        const { selectedCurrency, banks } = this.props;

        if (!selectedCurrency) {
            this.setState({
                filteredBanks: banks,
            });
        } else {
            this.setState({
                filteredBanks: banks.filter(({ currencies }) =>
                    currencies.includes(selectedCurrency)
                ),
            });
        }
    }

    render() {
        const { lastUpdated, selectedCurrency, setSelectedCurrency } =
            this.props;
        const { filteredBanks } = this.state;
        return (
            <Wrapper>
                <UpdatedStatus lastUpdated={new Date(lastUpdated)} />
                <Title>Search currency in the bank</Title>
                <CurrencySearch
                    selectedCurrency={selectedCurrency}
                    selectCurrency={setSelectedCurrency}
                />
                <BankMap banks={filteredBanks} />
            </Wrapper>
        );
    }
}

const MapStateToProps = (state: RootState) => ({
    lastUpdated: state.bank.lastUpdated,
    banks: state.bank.banks,
    selectedCurrency: state.bank.selectedCurrency,
});

const MapDispatchToProps = (dispatch: Dispatch) => ({
    setSelectedCurrency: (currency: string | null) =>
        dispatch(setSelectedCurrency(currency)),
});

export const BankCard = connect(
    MapStateToProps,
    MapDispatchToProps
)(BankCardPage);
