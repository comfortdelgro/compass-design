import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    icon?: React.ReactNode;
    name?: string;
    position?: 'up' | 'right' | 'down' | 'left' | undefined;
    isVisible?: boolean;
    css?: CSS;
    className?: string;
}
export declare const SpeedDialAction: React.ForwardRefExoticComponent<Props & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props> & React.RefAttributes<HTMLButtonElement>>;
export {};
