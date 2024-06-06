import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    disabled?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
}
export type TableCheckboxCellProps = Props & Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>;
declare const TableCheckboxCell: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props> & React.RefAttributes<HTMLInputElement>>;
export default TableCheckboxCell;
