import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export interface StyledMultipleDropdownItemProps {
    value?: string | number;
    textValue?: string;
    checkmark?: 'none' | 'checkbox' | 'tick';
    children: React.ReactNode;
    css?: CSS;
}
export type MultipleDropdownItemProps = StyledMultipleDropdownItemProps;
declare const MultipleDropdownItem: React.ForwardRefExoticComponent<StyledMultipleDropdownItemProps & React.RefAttributes<HTMLLIElement>>;
export default MultipleDropdownItem;
