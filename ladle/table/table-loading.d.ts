import React, { HTMLAttributes } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    colSpan: number;
    loadingIndicator: React.ReactNode;
}
export type TableLoadingProps = Props & Omit<HTMLAttributes<HTMLTableRowElement>, keyof Props>;
declare const TableLoading: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props> & React.RefAttributes<HTMLTableRowElement>>;
export default TableLoading;
