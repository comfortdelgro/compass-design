import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import DropdownMenuItem from './dropdown-menu-item';
import DropdownMenuMenu from './dropdown-menu-menu';
import DropdownMenuSubmenu from './dropdown-menu-submenu';
import DropdownMenuToggle from './dropdown-menu-toggle';
interface Props {
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onOpenChange?: (status: boolean) => void;
    'aria-labelledby'?: string;
    css?: CSS;
}
export type DropdownMenuProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Toggle: typeof DropdownMenuToggle;
    Item: typeof DropdownMenuItem;
    Submenu: typeof DropdownMenuSubmenu;
    Menu: typeof DropdownMenuMenu;
};
export default _default;
