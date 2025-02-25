import { Logo } from '#components/Logo';

import { Text, Title, Wrapper } from './styled';

export function Banner() {
    return (
        <Wrapper>
            <Title>Modsen Currency Tracker</Title>
            <Text>
                Quotes for the dollar and other international&nbsp;currencies.
            </Text>
            <Logo />
        </Wrapper>
    );
}
