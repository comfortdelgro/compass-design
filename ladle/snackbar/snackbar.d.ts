import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import SnackbarPrefixIcon from './snackbar-prefix-icon';
import SnackbarSuffixIcon from './snackbar-suffix-icon';
import SnackbarText from './snackbar-text';
interface Props {
    id?: number | string;
    children?: React.ReactNode;
    portalTo?: HTMLElement;
    isOpen?: boolean;
    handleClose?: () => void;
    onClick?: (e: React.MouseEvent, id: number | string | undefined) => void;
    autoClose?: false | number;
    css?: CSS;
    className?: string;
    type?: 'success' | 'warning' | 'default' | 'error' | 'reminder' | 'ongoing';
}
export type SnackbarProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Text: typeof SnackbarText;
    PrefixIcon: typeof SnackbarPrefixIcon;
    SuffixIcon: typeof SnackbarSuffixIcon;
};
export default _default;
