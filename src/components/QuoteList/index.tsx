import { ReactNode } from 'react';

import { ErrorText, List, Title } from './styled';

type QuoteListProps = {
    title: string;
    error?: string | null;
    children: ReactNode;
};

export function QuoteList({ title, error, children }: QuoteListProps) {
    return (
        <>
            <List>
                <Title>
                    {title} {error && <ErrorText>{error}</ErrorText>}
                </Title>
                {!error && <div></div>}
                {children}
            </List>
        </>
    );
}
