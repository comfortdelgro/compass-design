import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import BannerDescription from './banner-description';
import BannerImage from './banner-image';
import BannerTitle from './banner-title';
interface Props {
    children?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'full';
    css?: CSS;
    className?: string;
}
export type BannerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Image: typeof BannerImage;
    Title: typeof BannerTitle;
    Description: typeof BannerDescription;
};
export default _default;
