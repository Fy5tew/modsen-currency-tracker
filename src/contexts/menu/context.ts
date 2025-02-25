import { createContext } from 'react';

export type MenuContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

export const MenuContext = createContext<MenuContextType>({
    isOpen: false,
    open: () => {},
    close: () => {},
    toggle: () => {},
});
