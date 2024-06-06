import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    isActive?: boolean;
    icon?: React.ReactNode;
    isNested?: boolean;
    isDisabled?: boolean;
}
export type MenuListDropdownItemProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const MenuListDropdownItem: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default MenuListDropdownItem;
