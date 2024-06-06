/// <reference types="react" />
import DrawerFooter from './drawer-footer';
import DrawerHeader from './drawer-header';
export type { DrawerFooterProps } from './drawer-footer';
export type { DrawerHeaderProps } from './drawer-header';
export type { DrawerDefaultProps, DrawerH5Props, DrawerProps, DrawerRef, } from './types';
declare const Drawer: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<import("./types").DrawerProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<import("./types").DrawerRef>> & {
    Header: typeof DrawerHeader;
    Footer: typeof DrawerFooter;
};
export default Drawer;
