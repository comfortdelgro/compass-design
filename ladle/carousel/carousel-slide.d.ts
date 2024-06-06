import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
    active: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export type CarouselSlideProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const CarouselSlide: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default CarouselSlide;
