import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
}
export type DialogTitleProps = Props & Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>;
declare const DialogTitle: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props> & React.RefAttributes<HTMLHeadingElement>>;
export default DialogTitle;
