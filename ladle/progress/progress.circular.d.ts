import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    size?: number;
    color?: string;
    value?: number;
    thickness?: number;
    disableShrink?: boolean;
    variant?: 'determinate' | 'indeterminate';
}
export type CircularProgressProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const CircularProgress: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default CircularProgress;
