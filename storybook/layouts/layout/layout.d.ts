import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
export type LayoutAlignment = 'start-start' | 'center-start' | 'end-start' | 'start-center' | 'center-center' | 'end-center' | 'start-end' | 'center-end' | 'end-end';
export interface Props {
    children?: React.ReactNode;
    css?: CSS;
    direction?: 'row' | 'column';
    flex?: number;
    align?: LayoutAlignment;
    className?: string;
    style?: React.CSSProperties;
}
declare const Layout: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Layout;
