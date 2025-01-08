import { Wrapper } from './styled';

type PageContentProps = {
    children: React.ReactNode;
};

export function PageContent({ children }: PageContentProps) {
    return <Wrapper>{children}</Wrapper>;
}
