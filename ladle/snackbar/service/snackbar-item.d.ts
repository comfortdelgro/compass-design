import { SnackbarItemType } from './types';
export type SnackbarItemProps = SnackbarItemType & {
    snackbarItemClassName?: string;
};
declare const SnackbarItem: ({ id, snackbarItemClassName, autoClose, prefixIcon, suffixIcon, text, type, onClick, css, }: SnackbarItemProps) => import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element;
export default SnackbarItem;
