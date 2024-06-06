import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    color?: string;
    flexItem?: boolean;
    absolute?: boolean;
    children?: React.ReactNode;
    component?: keyof JSX.IntrinsicElements;
    orientation?: 'vertical' | 'horizontal';
    variant?: 'fullWidth' | 'inset' | 'middle';
    textAlign?: 'center' | 'right' | 'left' | 'top' | 'bottom';
}
export type DividerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Divider: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLElement>>;
export default Divider;
