import {
    ContactDescription,
    ContactInfo,
    ContactLink,
    Contacts,
    ContactTitle,
    Title,
    Wrapper,
} from './styled';

export function Contact() {
    return (
        <Wrapper>
            <Title>Our contacts</Title>
            <Contacts>
                <ContactInfo>
                    <ContactTitle>Phone</ContactTitle>
                    <ContactLink href="tel:+48501157180" target="_blank">
                        +48501157180
                    </ContactLink>
                    <ContactDescription>
                        Feel free to call us anytime! Our customer service is
                        available 24/7 to assist you with any inquiries or
                        support you may need.
                    </ContactDescription>
                </ContactInfo>
                <ContactInfo>
                    <ContactTitle>Email</ContactTitle>
                    <ContactLink
                        href="mailto:contact@modsen-software.com"
                        target="_blank"
                    >
                        contact@modsen-software.com
                    </ContactLink>
                    <ContactDescription>
                        We respond within 24 hours. Whether you have a question
                        about our services or need technical support, we are
                        here to help you.
                    </ContactDescription>
                </ContactInfo>
                <ContactInfo>
                    <ContactTitle>Address</ContactTitle>
                    <ContactLink
                        href="https://www.google.com/maps/place/ul. Żelazna 59 Warsaw, Poland"
                        target="_blank"
                    >
                        ul. Żelazna 59 Warsaw, Poland
                    </ContactLink>
                    <ContactDescription>
                        Visit us for a friendly chat! Our office is open Monday
                        to Friday, and we welcome visitors to discuss projects
                        or partnerships.
                    </ContactDescription>
                </ContactInfo>
            </Contacts>
        </Wrapper>
    );
}
