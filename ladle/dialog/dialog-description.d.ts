import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
}
export type DialogDescriptionProps = Props & Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>;
declare const DialogDescription: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props> & React.RefAttributes<HTMLParagraphElement>>;
export default DialogDescription;
