import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import TableCheckboxCell from './table-checkbox-cell';
import TableFooter from './table-footer';
import ProgressPercentage from './table-progress';
import TableToolbar from './table-toolbar';
import { Props } from './utils/types';
export type TableProps<T = any> = Props<T> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>;
declare const _default: React.ForwardRefExoticComponent<Props<any> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>> & React.RefAttributes<HTMLTableElement>> & {
    Toolbar: typeof TableToolbar;
    Footer: typeof TableFooter;
    CheckboxCell: typeof TableCheckboxCell;
    ProgressPercentage: typeof ProgressPercentage;
};
export default _default;
