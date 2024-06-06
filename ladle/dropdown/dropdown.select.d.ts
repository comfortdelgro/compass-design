import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DropdownProps } from './dropdown';
export interface DropdownSelectProps extends DropdownProps {
    additionalProp?: boolean;
}
declare const DropdownSelect: React.ForwardRefExoticComponent<DropdownSelectProps & React.RefAttributes<HTMLDivElement>>;
export default DropdownSelect;
