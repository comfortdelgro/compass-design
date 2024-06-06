import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    size?: number;
    color?: string;
    value?: number;
    valueBuffer?: number;
    variant?: 'buffer' | 'determinate' | 'indeterminate';
    rounded?: boolean;
}
export type LinearProgressProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const LinearProgress: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default LinearProgress;
