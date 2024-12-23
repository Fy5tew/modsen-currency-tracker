import logoSrc from '#assets/logo.svg';

import { Image, Wrapper } from './styled';

export function Logo() {
    return (
        <Wrapper>
            <Image src={logoSrc} alt="Logo" />
        </Wrapper>
    );
}
