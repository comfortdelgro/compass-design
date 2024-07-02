import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import { Component } from '../utils';
interface Props {
    variant?: 'header0' | 'header1' | 'header2' | 'header3' | 'header4' | 'header5';
    component?: Component;
    children: React.ReactNode;
    css?: CSS;
    weight?: 'semibold' | 'bold';
}
export type headerTypographyProps = Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props>;
declare const Header: React.FC<headerTypographyProps>;
export default Header;
