import { Bank } from '#types/bank';

import { Content, Header, StyledPopup, Wrapper } from './styled';

type BankPopupProps = {
    bank: Bank;
    onClose: () => void;
};

export function BankPopup({ bank, onClose }: BankPopupProps) {
    const { title, address, currencies } = bank;
    const { latitude, longitude } = bank.location;

    return (
        <StyledPopup
            latitude={latitude}
            longitude={longitude}
            closeOnClick={true}
            onClose={onClose}
        >
            <Wrapper>
                <Header>{title}</Header>
                <Content>{address}</Content>
                <Content>{currencies.join(', ')}</Content>
            </Wrapper>
        </StyledPopup>
    );
}
