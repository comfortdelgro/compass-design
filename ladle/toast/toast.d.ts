import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import ToastActions from './toast-actions';
import ToastCloseIcon from './toast-closeIcon';
import ToastIcon from './toast-icon';
import ToastLabel from './toast-label';
import ToastMessage from './toast-message';
import ToastTitle from './toast-title';
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
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Actions: typeof ToastActions;
    CloseIcon: typeof ToastCloseIcon;
    Icon: typeof ToastIcon;
    Label: typeof ToastLabel;
    Message: typeof ToastMessage;
    Title: typeof ToastTitle;
};
export default _default;
