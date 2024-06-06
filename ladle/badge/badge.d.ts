import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    label?: string;
    icon?: boolean | React.ReactNode;
    destination?: string;
    css?: CSS;
    variant?: 'outline' | 'h5' | 'primary' | 'secondary' | 'rounded';
    color?: 'info' | 'danger' | 'success' | 'warning';
    status?: 'online' | 'away' | 'busy' | 'offline';
    statusSize?: '8' | '12' | '16' | '20' | '24' | '28';
    isDisabled?: boolean;
    size?: 'sm' | 'lg';
    isRevert?: boolean;
}
export type BadgeProps = Omit<Props, 'children'> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Badge: React.ForwardRefExoticComponent<Omit<Props, "children"> & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Badge;
