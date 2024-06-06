/// <reference types="react" />
import { ToastItemType } from './types';
export type ToastItemProps = ToastItemType & {
    toastItemClassName?: string;
    horizontal: 'left' | 'right' | 'center';
    vertical: 'bottom' | 'top' | 'center';
};
declare const ToastItem: ({ id, message, toastItemClassName, autoClose, hasCloseIcon, actions, icon, title, label, color, itemClassName, horizontal, vertical, }: ToastItemProps) => JSX.Element;
export default ToastItem;
