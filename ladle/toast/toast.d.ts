import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Anchor {
    vertical: 'top' | 'bottom' | 'center';
    horizontal: 'left' | 'center' | 'right';
}
interface Props {
    children?: React.ReactNode;
    portalTo?: HTMLElement;
    isOpen?: boolean;
    isItemContainer?: boolean;
    withHeader?: boolean;
    handleClose?: () => void;
    autoClose?: false | number;
    anchorOrigin?: Anchor;
    css?: CSS;
    color?: 'informative' | 'neutral' | 'negative' | 'positive';
}
export type ToastProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Toast: any;
export default Toast;
