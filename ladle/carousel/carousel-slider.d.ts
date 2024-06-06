import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import CarouselImageSlide from './carousel-image-slide';
import CarouselMobile from './carousel-mobile';
import CarouselPromotion from './carousel-promotion';
import CarouselSlide from './carousel-slide';
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
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Slide: typeof CarouselSlide;
    ImageSlide: typeof CarouselImageSlide;
    Promotion: typeof CarouselPromotion;
    Mobile: typeof CarouselMobile;
};
export default _default;
