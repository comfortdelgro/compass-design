import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    handleClose?: () => void;
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    triggerId?: string;
    css?: CSS;
}
export type ModalProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Modal: any;
export default Modal;
