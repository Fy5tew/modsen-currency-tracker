import { styled } from 'styled-components';

type OverlayProps = {
    open?: boolean;
};

export const Overlay = styled.div<OverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    ${({ open }) => !open && 'display: none;'}
`;

export const Dialog = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 2em;

    width: fit-content;
    max-width: 90%;
    max-height: 90%;

    overflow-x: hidden;
    overflow-y: auto;

    border-radius: 1em;
    border-color: ${({ theme }) => theme.borderColor};
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColor};
`;
