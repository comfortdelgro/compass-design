import { Header, Table } from '@tanstack/react-table';
import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props<TData, TValue> {
    css?: CSS;
    tableOption: Table<TData>;
    headerProps: Header<TData, TValue>;
}
export type TableColumnHeaderProps<TData = unknown, TValue = unknown> = Props<TData, TValue> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>>;
declare const TableColumnHeader: React.ForwardRefExoticComponent<Props<unknown, unknown> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>> & React.RefAttributes<HTMLTableCellElement>>;
export default TableColumnHeader;
