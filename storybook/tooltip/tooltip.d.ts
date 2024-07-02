import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    title?: React.ReactNode | string;
    children?: React.ReactNode;
    dismissible?: boolean;
    className?: string;
    css?: CSS;
}
export type TooltipProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Tooltip: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Tooltip;
