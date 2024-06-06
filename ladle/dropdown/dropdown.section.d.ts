import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export interface DropdownSectionBase {
    title?: React.ReactNode;
    'aria-label'?: string;
    children: React.ReactNode;
    isClickable?: boolean;
    onClick?: () => void;
    isChecked?: boolean;
    checkmark?: 'checkbox' | 'tick';
    css?: CSS;
}
export type DropdownSectionProps = DropdownSectionBase & Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase>;
declare const DropdownSection: React.ForwardRefExoticComponent<DropdownSectionBase & Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase> & React.RefAttributes<HTMLDivElement>>;
export default DropdownSection;
