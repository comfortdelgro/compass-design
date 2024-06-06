import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import MenuListDropdownHeader from './menu-list-dropdown-header';
import MenuListDropdownItem from './menu-list-dropdown-item';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onMenuListChange?: (isOpen: boolean) => void;
}
export type MenuListDropdownProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Header: typeof MenuListDropdownHeader;
    Item: typeof MenuListDropdownItem;
};
export default _default;
