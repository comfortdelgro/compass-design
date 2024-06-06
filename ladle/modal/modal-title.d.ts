import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    h5?: boolean;
    css?: CSS;
}
export type ModalTitleProps = Props & Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>;
declare const ModalTitle: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props> & React.RefAttributes<HTMLHeadingElement>>;
export default ModalTitle;
