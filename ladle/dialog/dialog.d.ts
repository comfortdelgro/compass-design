import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    variant?: 'confirmation' | 'alert';
    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    triggerId?: string;
    handleClose?: () => void;
    css?: CSS;
}
export type DialogProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Dialog: any;
export default Dialog;
