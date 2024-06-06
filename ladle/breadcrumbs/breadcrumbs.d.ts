import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import BreadcrumbItem from './breadcrumb-item';
export interface Props {
    css?: CSS;
    children?: React.ReactNode;
    dividerIcon?: React.ReactNode;
    isCurrent?: (item: number) => boolean;
    className?: string;
}
export type BreadcrumbsProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof BreadcrumbItem;
};
export default _default;
