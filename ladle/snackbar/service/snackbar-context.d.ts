import { ReactNode } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import { SnackbarItemType } from './types';
export declare const SnackbarContext: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').Context<SnackbarContextValue>;
interface SnackbarContextProviderProps {
    children: ReactNode;
    containerCSS?: CSS;
}
export interface SnackbarContextValue {
    show: (item: SnackbarItemType) => void;
    remove: (id: number) => void;
    clearAll: () => void;
}
export declare const SnackbarContextProvider: ({ children, containerCSS, }: SnackbarContextProviderProps) => JSX.Element;
export {};
