import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { MENU_ROOT_ELEMENT_ID } from '#constants/dom';

import { Menu as StyledMenu, Overlay } from './styled';

type MenuProps = {
    isOpen?: boolean;
    onClose: () => void;
    children: ReactNode;
};

export function Menu({ isOpen, onClose, children }: MenuProps) {
    return createPortal(
        <>
            <Overlay $isOpen={isOpen} onClick={onClose}>
                <StyledMenu onClick={(e) => e.stopPropagation()}>
                    {children}
                </StyledMenu>
            </Overlay>
        </>,
        document.getElementById(MENU_ROOT_ELEMENT_ID) as HTMLElement
    );
}
