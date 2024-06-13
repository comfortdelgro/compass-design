import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    isDisabled?: boolean;
    mode?: 'vertical' | 'horizontal';
    labelAlignment?: 'left' | 'right' | 'top' | 'bottom' | 'alternate';
    itemAlignment?: 'left' | 'right' | 'top' | 'bottom' | 'alternate';
    css?: CSS;
}
export type TimelineProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Timeline: any;
export default Timeline;
