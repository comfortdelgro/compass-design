import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../objectToCss';
interface FlexboxProps {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
}
export type FlexboxComponentProps = FlexboxProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof FlexboxProps>;
declare const Flexbox: React.ForwardRefExoticComponent<FlexboxProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof FlexboxProps> & React.RefAttributes<HTMLDivElement>>;
export default Flexbox;
