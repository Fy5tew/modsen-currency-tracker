import { ReactNode, useCallback, useState } from 'react';

import { MenuContext } from './context';

type MenuProviderProps = {
    children: ReactNode;
};

export function MenuProvider({ children }: MenuProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    const value = { isOpen, open, close, toggle };

    return (
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    );
}
