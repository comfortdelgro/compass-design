import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export interface Props {
    css?: CSS;
    resizeHandler: (e: unknown) => void;
}
export type TableResizerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const TableResizer: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLTableCellElement>>;
export default TableResizer;
