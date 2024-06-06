import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    href?: string;
    target?: string;
    external?: boolean;
    children?: React.ReactNode;
    css?: CSS;
}
export type LinkProps = Props & Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>;
declare const Link: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props> & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
