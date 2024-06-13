import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onOpenChange?: (status: boolean) => void;
    'aria-labelledby'?: string;
    css?: CSS;
}
export type DropdownMenuProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const DropdownMenu: any;
export default DropdownMenu;
