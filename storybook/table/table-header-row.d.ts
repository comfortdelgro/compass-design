import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
}
export type TableHeaderRowProps = Props & Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props>;
declare const TableHeaderRow: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLTableRowElement>, "css"> & React.RefAttributes<HTMLTableRowElement>>;
export default TableHeaderRow;
