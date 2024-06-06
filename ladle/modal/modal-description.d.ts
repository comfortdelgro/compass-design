import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    h5?: boolean;
    children?: React.ReactNode;
    css?: CSS;
}
export type ModalDescriptionProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const ModalDescription: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default ModalDescription;
