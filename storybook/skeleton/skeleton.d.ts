import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    color?: string;
    width?: string | number;
    height?: string | number;
    children?: React.ReactNode;
    component?: keyof JSX.IntrinsicElements;
    animation?: 'pulse' | 'wave' | false;
    variant?: 'circular' | 'rectangular' | 'rounded' | 'text';
}
export type SkeletonProps = Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props>;
declare const Skeleton: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props> & React.RefAttributes<HTMLElement>>;
export default Skeleton;
