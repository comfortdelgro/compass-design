import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import SidebarActions from './sidebar-actions';
import SidebarContent from './sidebar-content';
import SidebarTitle from './sidebar-title';
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
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Actions: typeof SidebarActions;
    Content: typeof SidebarContent;
    Title: typeof SidebarTitle;
};
export default _default;
