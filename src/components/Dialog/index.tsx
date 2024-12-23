import { ComponentProps } from 'react';
import { createPortal } from 'react-dom';

import { MODAL_ROOT_ELEMENT_ID } from '#/constants/dom';

import { Dialog as StyledDialog, Overlay } from './styled';

type ModalWindowProps = ComponentProps<typeof StyledDialog> & {
    onClose?: () => void;
};

export function Dialog({ onClose, ...props }: ModalWindowProps) {
    return createPortal(
        <>
            <Overlay open={props.open ?? false} onClick={onClose} />
            <StyledDialog {...props} />
        </>,
        document.getElementById(MODAL_ROOT_ELEMENT_ID) as HTMLElement
    );
}
