import React, { SyntheticEvent } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    leftIcon?: React.ReactNode | false;
    rightIcon?: React.ReactNode | true;
    onPress?: (e: SyntheticEvent) => void;
}
export type MenuListDropdownHeaderProps = Props & Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>;
declare const MenuListDropdownHeader: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props> & React.RefAttributes<HTMLButtonElement>>;
export default MenuListDropdownHeader;
