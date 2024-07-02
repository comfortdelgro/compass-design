import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children: React.ReactNode;
    css?: CSS;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export type DropdownItemProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
export type DropdownHeaderProps = Props;
declare const DropdownHeader: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default DropdownHeader;
