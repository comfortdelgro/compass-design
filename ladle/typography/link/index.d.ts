import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
interface Props {
    variant?: 'link1' | 'link2' | 'link3';
    weight?: 'semibold' | 'bold';
    children: React.ReactNode;
    css?: CSS;
}
export type linkTypographyProps = Props & Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>;
declare const Link: React.FC<linkTypographyProps>;
export default Link;
