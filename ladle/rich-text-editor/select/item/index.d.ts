import React from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../../utils/objectToCss';
export interface Props {
    key: React.Key;
    renderAs?: React.ReactNode;
    children: React.ReactNode;
    'aria-label'?: string;
    css?: CSS;
    className?: string;
}
export type DropdownItemProps = Props;
declare const DropdownItem: React.FC<DropdownItemProps>;
export default DropdownItem;
