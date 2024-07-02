import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    rightColor?: string;
    type?: 'icon' | 'color';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    value?: string | number;
    textValue?: React.ReactNode;
    checkmark?: 'none' | 'checkbox' | 'tick';
    flagName?: string;
    children: React.ReactNode;
    css?: CSS;
}
export type DropdownItemProps = Props & Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props>;
declare const DropdownItem: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props> & React.RefAttributes<HTMLLIElement>>;
export default DropdownItem;
