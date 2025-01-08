import { styled } from 'styled-components';

type OverlayProps = {
    $isOpen?: boolean;
};

export const Overlay = styled.div<OverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease-in-out;

    ${({ $isOpen }) => !$isOpen && 'transform: translateX(100%);'}
`;

export const Menu = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    min-width: fit-content;
    width: 50%;

    overflow-y: auto;

    background-color: ${({ theme }) => theme.backgroundColor};
    transition: background 0.3s ease-in-out;
`;
