import { useMenu } from '#contexts/menu';

import { Bar, Button } from './styled';

export function MenuButton() {
    const { isOpen, toggle } = useMenu();

    return (
        <Button $isOpen={isOpen} onClick={toggle}>
            <Bar $isOpen={isOpen} />
            <Bar $isOpen={isOpen} />
            <Bar $isOpen={isOpen} />
        </Button>
    );
}
