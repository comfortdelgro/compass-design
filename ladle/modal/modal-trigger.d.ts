import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    isOpen?: boolean;
    handleClose?: () => void;
    size?: 'sm' | 'md' | 'lg';
    id?: string;
    css?: CSS;
}
export type ModalTriggerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const ModalTrigger: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default ModalTrigger;
