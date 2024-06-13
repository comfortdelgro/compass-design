import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'full';
    css?: CSS;
    className?: string;
}
export type BannerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Banner: any;
export default Banner;
