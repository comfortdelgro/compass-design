import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    icon?: false | React.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    css?: CSS;
    color?: 'info' | 'success' | 'warning' | 'danger';
}
export type AlertProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Alert: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Alert;
