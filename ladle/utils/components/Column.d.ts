import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../objectToCss';
interface ColumnProps {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
}
export type ColumnComponentProps = ColumnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof ColumnProps>;
declare const Column: React.ForwardRefExoticComponent<ColumnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof ColumnProps> & React.RefAttributes<HTMLDivElement>>;
export default Column;
