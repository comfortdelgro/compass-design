import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export interface Props {
    length: number;
    current: number;
    css?: CSS;
    style?: React.CSSProperties;
    dotClick?: (index: number) => void;
}
declare const CarouselSliderDots: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default CarouselSliderDots;
