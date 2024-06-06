import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { SelectedItemDropdown } from './multiple-dropdown-context';
export interface DropdownSectionBase {
    id?: number | string;
    title?: React.ReactNode;
    'aria-label'?: string;
    children: React.ReactNode;
    isClickable?: boolean;
    isChecked?: boolean;
    checkmark?: 'checkbox' | 'tick';
    index?: number;
    css?: CSS;
    onClick?: (title: React.ReactNode) => void;
    onSectionClick?: (items: SelectedItemDropdown[], checking: boolean, id: string | number, index: number) => void;
}
export type DropdownSectionProps = DropdownSectionBase & Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase>;
declare const MultipleDropdownSection: React.ForwardRefExoticComponent<DropdownSectionBase & Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase> & React.RefAttributes<HTMLDivElement>>;
export default MultipleDropdownSection;
