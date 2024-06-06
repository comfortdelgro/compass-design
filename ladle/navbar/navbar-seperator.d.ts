import React, { PropsWithChildren } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export type NavbarSeperatorProps = PropsWithChildren<{
    css?: CSS;
} & React.HTMLAttributes<HTMLDivElement>>;
export declare const NavbarSeperator: React.ForwardRefExoticComponent<{
    css?: CSS;
} & React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
