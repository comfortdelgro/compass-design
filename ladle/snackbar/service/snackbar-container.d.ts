import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import { SnackbarItemType } from './types';
interface Props {
    snackbars: SnackbarItemType[];
    snackbarItemClassName?: string;
    css?: CSS;
    className?: string;
}
export type SnackbarsContainerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const SnackbarsContainer: (props: SnackbarsContainerProps) => JSX.Element;
export default SnackbarsContainer;
