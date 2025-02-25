import { Marker } from 'react-map-gl';

import { Image } from './styled';

type BankMarkerProps = {
    latitude: number;
    longitude: number;
    onClick?: () => void;
};

export function BankMarker({ latitude, longitude, onClick }: BankMarkerProps) {
    return (
        <>
            <Marker
                latitude={latitude}
                longitude={longitude}
                onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    onClick?.call({});
                }}
            >
                <Image />
            </Marker>
        </>
    );
}
