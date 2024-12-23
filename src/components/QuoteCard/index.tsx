import { Card, Icon, Text, TextContainer, Title } from './styled';

type QuoteCardProps = {
    code: string;
    title: string;
    text: string;
    iconSrc: string;
    onClick?: () => void;
};

export function QuoteCard({
    code,
    title,
    text,
    iconSrc,
    onClick,
}: QuoteCardProps) {
    return (
        <Card onClick={onClick}>
            <Icon src={iconSrc} alt="icon" />
            <TextContainer>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </TextContainer>
        </Card>
    );
}
