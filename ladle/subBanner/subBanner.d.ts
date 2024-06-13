import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    css?: CSS;
    className?: string;
}
export type SubBannerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const SubBanner: any;
export default SubBanner;
