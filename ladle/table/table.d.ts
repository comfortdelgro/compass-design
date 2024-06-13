import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { Props } from './utils/types';
export type TableProps<T = unknown> = Props<T> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>;
declare const Table: any;
export default Table;
