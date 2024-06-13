import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    color?: 'white' | 'black' | 'blue';
}
export type FooterProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Footer: any;
export default Footer;
