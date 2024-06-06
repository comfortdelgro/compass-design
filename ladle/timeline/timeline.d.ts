import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import TimelineItem from './timeline-item';
interface Props {
    children?: React.ReactNode;
    isDisabled?: boolean;
    mode?: 'vertical' | 'horizontal';
    labelAlignment?: 'left' | 'right' | 'top' | 'bottom' | 'alternate';
    itemAlignment?: 'left' | 'right' | 'top' | 'bottom' | 'alternate';
    css?: CSS;
}
export type TimelineProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof TimelineItem;
};
export default _default;
