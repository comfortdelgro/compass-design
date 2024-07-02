import { ExtendedRefs, Placement, ReferenceType } from '@floating-ui/react';
import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    isOpen?: boolean;
    isOpenMenu?: boolean;
    placement?: Placement;
    delay?: {
        open?: number;
        close?: number;
    };
    shouldFlip?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    setMenuParentProps?: (ref: ExtendedRefs<ReferenceType>, getReferenceProps: (userProps?: React.HTMLProps<Element> | undefined) => Record<string, unknown>) => void;
    css?: CSS;
    className?: string;
}
export type SidenavMenuProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const SidenavMenu: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export interface SideMenuContextValue {
    setIsChildOpen?: (open: boolean) => void;
}
export declare const SideMenuContext: React.Context<SideMenuContextValue>;
export default SidenavMenu;
