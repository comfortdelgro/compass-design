/// <reference types="react" />
import { SnackbarItemType } from './types';
export type SnackbarItemProps = SnackbarItemType & {
    snackbarItemClassName?: string;
};
declare const SnackbarItem: ({ id, snackbarItemClassName, autoClose, prefixIcon, suffixIcon, text, type, onClick, css, }: SnackbarItemProps) => JSX.Element;
export default SnackbarItem;
