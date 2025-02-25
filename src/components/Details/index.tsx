import { ComponentProps } from 'react';

import { Details as StyledDetails, Summary as StyledSummary } from './styled';

type DetailsProps = ComponentProps<typeof StyledDetails>;

type SummaryProps = ComponentProps<typeof StyledSummary>;

export function Details(props: DetailsProps) {
    return <StyledDetails {...props} />;
}

export function Summary(props: SummaryProps) {
    return <StyledSummary {...props} />;
}
