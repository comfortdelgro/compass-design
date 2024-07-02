import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    isSelected: boolean;
    isExpanded: boolean;
}
export type TableRowProps = Props & Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props>;
declare const TableRow: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props> & React.RefAttributes<HTMLTableRowElement>>;
export default TableRow;
