import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import { Component } from '../utils';
interface Props {
    variant?: 'label1' | 'label2' | 'label3';
    component?: Component;
    weight?: 'bold' | 'semibold' | 'light';
    children: React.ReactNode;
    css?: CSS;
}
export type labelTypographyProps = Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props>;
declare const Label: React.FC<labelTypographyProps>;
export default Label;
