import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    progress: number;
}
export type TableProgressProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const TableProgress: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default TableProgress;
