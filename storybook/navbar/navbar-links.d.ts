import React, { PropsWithChildren } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export type NavbarLinksProps = PropsWithChildren<{
    css?: CSS;
} & React.HTMLAttributes<HTMLUListElement>>;
export declare const NavbarLinks: React.ForwardRefExoticComponent<{
    css?: CSS;
} & React.HTMLAttributes<HTMLUListElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLUListElement>>;
