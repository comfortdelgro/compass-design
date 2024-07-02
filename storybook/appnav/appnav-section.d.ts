import React, { HTMLAttributes } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    isActive?: boolean;
    inactiveIcon: React.ReactNode;
    activeIcon: React.ReactNode;
    hasBadge?: boolean;
    label: string;
    index?: number;
    onChange?: (index: number) => void;
}
export type AppNavSectionProps = Props & Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>;
export declare const AppNavSection: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props> & React.RefAttributes<HTMLButtonElement>>;
export {};
