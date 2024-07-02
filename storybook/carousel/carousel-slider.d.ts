import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { AnimationType, NavigationButtonType, SocicalIcon } from './carousel.const';
interface Props {
    css?: CSS;
    style?: React.CSSProperties;
    children: React.ReactNode[];
    autoSwitch?: boolean;
    useNavigation?: boolean;
    useDotIndicator?: boolean;
    navigationButtonType?: NavigationButtonType;
    socials?: SocicalIcon[];
    className?: string;
    effect?: AnimationType;
    itemPerPage?: number;
    onSwitchSlide?: (index: number) => void;
}
export type CarouselSliderProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const CarouselSlider: any;
export default CarouselSlider;
