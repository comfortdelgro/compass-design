import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
    spacing?: 'sm' | 'md' | 'lg';
    justifyContent?: 'flexStart' | 'flexEnd' | 'center' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly';
    alignItems?: 'flexStart' | 'flexEnd' | 'center' | 'stretch' | 'baseline';
}
export type GridContainerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Grid: any;
export default Grid;
