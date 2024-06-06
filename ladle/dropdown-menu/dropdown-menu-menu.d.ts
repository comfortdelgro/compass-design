import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface MenuProps {
    children?: React.ReactNode;
    css?: CSS;
}
export type DropdownMenuMenuProps = MenuProps & Omit<React.HTMLAttributes<HTMLUListElement>, keyof MenuProps>;
export declare const MULTILEVEL_MENU_CLASS_NAME = "cdg-dropdown-multilevel-menu";
declare const DropdownMenuMenu: React.ForwardRefExoticComponent<MenuProps & Omit<React.HTMLAttributes<HTMLUListElement>, keyof MenuProps> & React.RefAttributes<HTMLUListElement>>;
export default DropdownMenuMenu;
