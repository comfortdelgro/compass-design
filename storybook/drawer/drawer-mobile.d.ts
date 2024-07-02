import { type DialogHTMLAttributes } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import type { DrawerRef } from './types';
declare const DrawerMobile: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<{
    classNames?: Partial<Record<import("./types").DrawerStylingSelectors, string>>;
    styles?: Partial<Record<import("./types").DrawerStylingSelectors, import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').CSSProperties>>;
    backdropProps?: {
        background?: string;
        blur?: string | number;
        opacity?: number;
    };
    drawerMode?: "non-modal" | "modal";
    preventFocus?: boolean;
    preventClose?: boolean;
} & import("./types").MobileDrawerSpecifiedProps & DialogHTMLAttributes<HTMLDialogElement> & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<DrawerRef>>;
export default DrawerMobile;
