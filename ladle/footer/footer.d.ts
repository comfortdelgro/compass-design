import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import FooterHeader from './footer-header';
import FooterNavigation from './footer-nav';
import FooterPolicy from './footer-policy';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    color?: 'white' | 'black' | 'blue';
}
export type FooterProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Header: typeof FooterHeader;
    Nav: typeof FooterNavigation;
    Policy: typeof FooterPolicy;
};
export default _default;
