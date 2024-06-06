import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    css?: CSS;
    icon?: false | React.ReactNode;
    children?: string | React.ReactNode;
    expandIcon?: React.ReactNode;
    'aria-expanded'?: boolean;
    'aria-controls'?: string;
}
export type AccordionTitleProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const AccordionTitle: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLButtonElement>>;
export default AccordionTitle;
