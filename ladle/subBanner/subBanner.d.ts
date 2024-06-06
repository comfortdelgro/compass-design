import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import SubBannerDescription from './subBanner-description';
import SubBannerImage from './subBanner-image';
import SubBannerTitle from './subBanner-title';
interface Props {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    css?: CSS;
    className?: string;
}
export type SubBannerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Image: typeof SubBannerImage;
    Title: typeof SubBannerTitle;
    Description: typeof SubBannerDescription;
};
export default _default;
