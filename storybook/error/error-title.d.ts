import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
    variant?: 'primary' | 'secondary';
}
export type ErrorTitleProps = Props & Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>;
declare const ErrorTitle: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props> & React.RefAttributes<HTMLHeadingElement>>;
export default ErrorTitle;
