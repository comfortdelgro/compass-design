/// <reference types="react" />
import DrawerFooter from './drawer-footer';
import DrawerHeader from './drawer-header';
import { DrawerRef } from './types';
declare const _default: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<{
    drawerMode?: "non-modal" | "modal";
    preventFocus?: boolean;
    preventClose?: boolean;
} & {
    variant?: "default";
    position?: "left" | "right" | "bottom";
    expanderCSS?: never;
    onExpandChange?: never;
    onHeightChange?: never;
    expandedPoint?: never;
    expandableLine?: never;
    disableResize?: never;
    disableDragClose?: never;
} & {
    css?: import("../utils/objectToCss").CSS;
} & Omit<import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DialogHTMLAttributes<HTMLDialogElement>, "autoFocus" | "tabIndex" | "css" | keyof {
    drawerMode?: "non-modal" | "modal";
    preventFocus?: boolean;
    preventClose?: boolean;
} | keyof {
    variant?: "default";
    position?: "left" | "right" | "bottom";
    expanderCSS?: never;
    onExpandChange?: never;
    onHeightChange?: never;
    expandedPoint?: never;
    expandableLine?: never;
    disableResize?: never;
    disableDragClose?: never;
}> & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<DrawerRef>> & {
    Header: typeof DrawerHeader;
    Footer: typeof DrawerFooter;
};
export default _default;
