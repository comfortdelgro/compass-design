import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import { Component } from '../utils';
interface Props {
    variant?: 'display1' | 'display2' | 'display3';
    weight?: 'bold' | 'semibold';
    component?: Component;
    children: React.ReactNode;
    css?: CSS;
}
export type displayTypographyProps = Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props>;
declare const Display: React.FC<displayTypographyProps>;
export default Display;
