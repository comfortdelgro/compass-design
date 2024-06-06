import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import AccordionExpandIcon from './accordion-expandIcon';
import AccordionTable from './accordion-table';
import AccordionTitle from './accordion-title';
interface Props {
    css?: CSS;
    expand?: boolean;
    defaultExpand?: boolean;
    children: React.ReactNode;
    onExpandChange?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    'aria-labelledby'?: string;
}
export type AccordionProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Table: typeof AccordionTable;
    Title: typeof AccordionTitle;
    ExpandIcon: typeof AccordionExpandIcon;
};
export default _default;
