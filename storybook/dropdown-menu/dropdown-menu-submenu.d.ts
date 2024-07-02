import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface SubmenuProps {
    children?: React.ReactNode;
    'aria-labelledby'?: string;
    css?: CSS;
}
export declare const MULTILEVEL_SUBMENU_CLASS_NAME = "cdg-dropdown-multilevel-submenu";
export type DropdownMenuSubmenuProps = SubmenuProps & Omit<React.HTMLAttributes<HTMLUListElement>, keyof SubmenuProps>;
declare const DropdownMenuSubmenu: React.ForwardRefExoticComponent<SubmenuProps & Omit<React.HTMLAttributes<HTMLUListElement>, keyof SubmenuProps> & React.RefAttributes<HTMLUListElement>>;
export default DropdownMenuSubmenu;
