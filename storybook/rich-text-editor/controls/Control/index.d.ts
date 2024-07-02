import React, { HTMLAttributes } from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../../utils/objectToCss';
interface Props {
    active: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    'aria-controls'?: string;
    'aria-expanded'?: boolean;
    'aria-haspopup'?: boolean;
    'aria-pressed'?: boolean;
    onBlur?: (e: React.FocusEvent) => void;
    onDragStart?: (e: React.MouseEvent) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onKeyUp?: (e: React.KeyboardEvent) => void;
    onPointerDown?: (e: React.PointerEvent) => void;
    onPointerUp?: (e: React.PointerEvent) => void;
    onTouchEnd?: (e: React.TouchEvent<HTMLButtonElement>) => void;
    tabIndex?: number;
    type?: 'button' | 'reset' | 'submit' | undefined;
    css?: CSS;
}
export interface PremadeControlProps {
    icon?: React.FC;
    controltype?: string;
    css?: CSS;
}
export type ButtonProps = Props & Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>;
declare const Control: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props> & React.RefAttributes<HTMLButtonElement>>;
export default Control;
