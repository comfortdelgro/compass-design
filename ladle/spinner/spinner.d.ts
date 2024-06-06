import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    label?: boolean | string;
    css?: CSS;
    className?: string;
    size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm';
}
export type SpinnerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Spinner: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Spinner;
