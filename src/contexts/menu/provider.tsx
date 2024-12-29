import { ReactNode, useState } from 'react';

import { MenuContext } from './context';

type MenuProviderProps = {
    children: ReactNode;
};

export function MenuProvider({ children }: MenuProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    const value = { isOpen, open, close, toggle };

    return (
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    );
}
