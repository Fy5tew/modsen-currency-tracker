import { Component } from 'react';
import { Map as BaseMap, NavigationControl } from 'react-map-gl';

import { BankMarker } from '#components/BankMarker';
import { BankPopup } from '#components/BankPopup';
import {
    ACCESS_TOKEN,
    INITIAL_VIEW_STATE,
    MAP_STYLE,
} from '#constants/bankMap';
import { Bank } from '#types/bank';

import { MapWrapper } from './styled';

type BankMapProps = {
    banks: Bank[];
};

type BankMapState = {
    selectedBankId: string | null;
};

export class BankMap extends Component<BankMapProps, BankMapState> {
    constructor(props: BankMapProps) {
        super(props);
        this.state = {
            selectedBankId: null,
        };
    }

    handlePopupOpen = (bankId: string) => {
        this.setState(({ selectedBankId: prevBankId }) => ({
            selectedBankId: prevBankId === bankId ? null : bankId,
        }));
    };

    handlePopupClose = () => {
        this.setState({ selectedBankId: null });
    };

    render() {
        const { banks } = this.props;
        const { selectedBankId } = this.state;
        const selectedBank = banks.find((bank) => bank.id === selectedBankId);

        return (
            <MapWrapper>
                <BaseMap
                    mapboxAccessToken={ACCESS_TOKEN}
                    mapStyle={MAP_STYLE}
                    initialViewState={INITIAL_VIEW_STATE}
                >
                    <NavigationControl position="top-right" />
                    {banks.map(({ id, location: { latitude, longitude } }) => (
                        <BankMarker
                            key={id}
                            latitude={latitude}
                            longitude={longitude}
                            onClick={() => this.handlePopupOpen(id)}
                        />
                    ))}
                    {selectedBank && (
                        <BankPopup
                            bank={selectedBank}
                            onClose={this.handlePopupClose}
                        />
                    )}
                </BaseMap>
            </MapWrapper>
        );
    }
}
