import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../objectToCss';
interface RowProps {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
}
export type RowComponentProps = RowProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof RowProps>;
declare const Row: React.ForwardRefExoticComponent<RowProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof RowProps> & React.RefAttributes<HTMLDivElement>>;
export default Row;
