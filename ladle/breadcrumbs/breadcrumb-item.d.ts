import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    href?: string;
    target?: string;
    isCurrent?: boolean;
    isDisabled?: boolean;
    children?: React.ReactNode;
}
export type BreadcrumbItemProps = Props & Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props> & React.RefAttributes<HTMLAnchorElement>>;
export default BreadcrumbItem;
