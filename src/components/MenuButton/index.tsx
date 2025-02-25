import { Bar, Button } from './styled';

type MenuButtonProps = {
    isActive: boolean;
    onClick: () => void;
};

export function MenuButton({ isActive, onClick }: MenuButtonProps) {
    return (
        <Button $isActive={isActive} onClick={onClick}>
            <Bar $isActive={isActive} />
            <Bar $isActive={isActive} />
            <Bar $isActive={isActive} />
        </Button>
    );
}
