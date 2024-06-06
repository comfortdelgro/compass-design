import { ReactNode } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { ToastItemType } from './types';
export declare const ToastContext: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').Context<ToastContextValue>;
export interface Anchor {
    vertical: 'top' | 'bottom' | 'center';
    horizontal: 'left' | 'center' | 'right';
}
interface ToastContextProviderProps {
    children: ReactNode;
    anchorOrigin?: Anchor;
    toastItemClassName?: string;
}
export interface ToastContextValue {
    show: (item: ToastItemType) => void;
    remove: (id: number) => void;
    clearAll: () => void;
}
export declare const ToastContextProvider: ({ children, anchorOrigin, toastItemClassName, }: ToastContextProviderProps) => JSX.Element;
export {};
