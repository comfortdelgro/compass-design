import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import NavbarActions from './navbar-actions';
import NavbarBrand from './navbar-brand';
import { NavbarLinks } from './navbar-links';
import { NavbarSeperator } from './navbar-seperator';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    variant?: 'portal' | 'website';
    color?: 'blue' | 'white';
}
export type NavbarProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Brand: typeof NavbarBrand;
    Actions: typeof NavbarActions;
    Links: typeof NavbarLinks;
    Separator: typeof NavbarSeperator;
};
export default _default;
