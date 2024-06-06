import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import ItemCounting from './components/ItemCounting';
interface Props {
    page?: number;
    total?: number;
    initialPage?: number;
    onChange?: (page: number) => void;
    count?: number;
    rowsPerPage?: number;
    rowsOptions?: number[];
    onRowsPerPageChange?: (rows: number) => void;
    css?: CSS;
}
export type PaginationProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    ItemCounting: typeof ItemCounting;
};
export default _default;
