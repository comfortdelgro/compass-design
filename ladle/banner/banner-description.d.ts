import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
}
export type BannerDescriptionProps = Props & Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>;
declare const BannerDescription: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default BannerDescription;
