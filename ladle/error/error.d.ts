import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
    variant?: 'primary' | 'secondary';
    className?: string;
}
export type ErrorProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Error: any;
export default Error;
