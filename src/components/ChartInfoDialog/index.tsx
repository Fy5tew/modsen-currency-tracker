import { ComponentProps } from 'react';

import { Dialog } from '#components/Dialog';

import { CloseButton, Text, Title, Wrapper } from './styled';

type ChartInfoDialogProps = Omit<ComponentProps<typeof Dialog>, 'children'>;

export function ChartInfoDialog(props: ChartInfoDialogProps) {
    return (
        <Dialog {...props}>
            <Wrapper>
                <Title>Success</Title>
                <Text>Chart information has been successfully updated.</Text>
                <CloseButton onClick={props.onClose}>Close</CloseButton>
            </Wrapper>
        </Dialog>
    );
}
