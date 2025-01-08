import { formatTime } from '#utils/formatTime';

import { Dot, Text, Wrapper } from './styled';

type UpdatedStatusProps = {
    lastUpdated: Date;
};

export function UpdatedStatus({ lastUpdated }: UpdatedStatusProps) {
    return (
        <Wrapper>
            <Dot />
            <Text>Last updated at {formatTime(lastUpdated)}</Text>
        </Wrapper>
    );
}
