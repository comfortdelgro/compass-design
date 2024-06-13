import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    isOpen?: boolean;
    handleClose?: () => void;
    onClick?: (event: MouseEvent) => void;
    position?: 'left' | 'right';
    css?: CSS;
    variant?: 'primary' | 'secondary';
    className?: string;
}
export type SidebarProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Sidebar: any;
export default Sidebar;
