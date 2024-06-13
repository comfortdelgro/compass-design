import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    isDisabled?: boolean;
    isShadowless?: boolean;
    isClickable?: boolean;
    size?: 'lg' | 'full' | 'sm';
}
export type CardProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Card: any;
export default Card;
