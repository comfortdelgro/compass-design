import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    label?: React.ReactNode | string;
    icon?: React.ReactNode;
    dot?: React.ReactNode;
    identifier?: number;
    css?: CSS;
}
export type TimelineItemProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const TimelineItem: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default TimelineItem;
