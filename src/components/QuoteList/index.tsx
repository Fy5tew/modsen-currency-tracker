import { ReactNode } from 'react';

import { List, Title } from './styled';

type QuoteListProps = {
    title: string;
    children: ReactNode;
};

export function QuoteList({ title, children }: QuoteListProps) {
    return (
        <>
            <List>
                <Title>{title}</Title>
                <div></div>
                {children}
            </List>
        </>
    );
}
