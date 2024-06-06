import { Column, Table } from '@tanstack/react-table';
import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props<TData, TValue> {
    css?: CSS;
    table: Table<TData>;
    column: Column<TData, TValue>;
}
export type HeaderColumnFilterProps<TData = unknown, TValue = unknown> = Props<TData, TValue> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>>;
declare const HeaderColumnFilter: React.ForwardRefExoticComponent<Props<unknown, unknown> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>> & React.RefAttributes<HTMLInputElement>>;
export default HeaderColumnFilter;
