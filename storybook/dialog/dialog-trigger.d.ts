import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    isOpen?: boolean;
    handleClose?: () => void;
    id?: string;
    variant?: 'confirmation' | 'alert';
    css?: CSS;
}
export type DialogTriggerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const DialogTrigger: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default DialogTrigger;
