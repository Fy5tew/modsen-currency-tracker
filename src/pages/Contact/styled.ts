import { styled } from 'styled-components';

import { COLORS, MEDIA, MIXINS } from '#constants/styles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5em;
`;

export const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    ${MIXINS.headerText};

    @media ${MEDIA.phone} {
        font-size: 2em;
    }
`;

export const Contacts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;

    @media ${MEDIA.tablet} {
        grid-template-columns: 1fr;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
`;

export const ContactTitle = styled.h2`
    text-align: center;
`;

export const ContactLink = styled.a`
    text-decoration: none;
    color: ${() => COLORS.monSoon};

    &:visited {
        color: ${COLORS.monSoon};
    }

    &:hover {
        text-decoration: underline;
        color: ${COLORS.greenTeal};
    }
`;

export const ContactDescription = styled.p``;
