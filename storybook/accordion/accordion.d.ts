import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    expand?: boolean;
    defaultExpand?: boolean;
    onExpandChange?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export type AccordionProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Accordion: any;
export default Accordion;
