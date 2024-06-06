import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    isDisabled?: boolean;
    isActived?: boolean;
    eventKey?: string;
    onSelect?: (event: React.MouseEvent<HTMLLIElement>, eventKey?: string) => void;
    css?: CSS;
}
export declare const MULTILEVEL_ITEM_CLASS_NAME = "cdg-dropdown-multilevel-item";
export type DropdownMenuItemProps = Props & Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props>;
declare const DropdownMenuItem: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props> & React.RefAttributes<HTMLLIElement>>;
export default DropdownMenuItem;
