import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import GridItem from './grid-item';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
    spacing?: 'sm' | 'md' | 'lg';
    justifyContent?: 'flexStart' | 'flexEnd' | 'center' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly';
    alignItems?: 'flexStart' | 'flexEnd' | 'center' | 'stretch' | 'baseline';
}
export type GridContainerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof GridItem;
};
export default _default;
