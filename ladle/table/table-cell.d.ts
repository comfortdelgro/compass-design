import { Cell, Row } from '@tanstack/react-table';
import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export interface Props<TData, TValue> {
    css?: CSS;
    row: Row<TData>;
    cell: Cell<TData, TValue>;
    onChangeCell?: (newData: object) => void;
}
export type TableCellProps<TData = unknown, TValue = unknown> = Props<TData, TValue> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>>;
declare const TableCell: React.ForwardRefExoticComponent<Props<unknown, unknown> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>> & React.RefAttributes<HTMLTableCellElement>>;
export default TableCell;
