import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import Divider from './divider';
import SidenavItem from './sidenav-item';
import SidenavMenu from './sidenav-menu';
interface Props {
    children: React.ReactNode;
    expand?: boolean;
    delay?: number;
    css?: CSS;
    className?: string;
    onExpandChange?: (expand: boolean) => void;
}
export type SidenavProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof SidenavItem;
    Divider: typeof Divider;
    Menu: typeof SidenavMenu;
};
export default _default;
