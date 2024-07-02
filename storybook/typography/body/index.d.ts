import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import { Component } from '../utils';
interface Props {
    variant?: 'body1' | 'body2' | 'body3';
    component?: Component;
    weight?: 'none' | 'bold' | 'semibold';
    children: React.ReactNode;
    css?: CSS;
}
export type bodyTypographyProps = Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props>;
declare const Body: React.FC<bodyTypographyProps>;
export default Body;
