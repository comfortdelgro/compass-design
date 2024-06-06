import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    imageUrl: string;
    css?: CSS;
    active: boolean;
    className?: string;
}
export type CarouselImageSlideProps = Props & Omit<React.HTMLAttributes<HTMLImageElement>, keyof Props>;
declare const CarouselImageSlide: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLImageElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default CarouselImageSlide;
