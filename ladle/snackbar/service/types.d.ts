import { ReactNode } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
export interface SnackbarItemType {
    id?: number;
    text?: ReactNode;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    autoClose?: false | number;
    type?: 'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing';
    onClick?: (e: React.MouseEvent, id: number | undefined) => void;
    css?: CSS;
}
export interface SnackbarState {
    snackbars: SnackbarItemType[];
}
export type SnackbarActions = {
    type: 'ADD_SNACKBAR';
    payload: SnackbarItemType;
} | {
    type: 'DELETE_SNACKBAR';
    payload: number;
} | {
    type: 'CLEAR_SNACKBAR';
};
