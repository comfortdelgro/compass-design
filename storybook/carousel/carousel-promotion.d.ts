import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CarouselOptions, CarouselSliderItem, NavigationButtonType, SocicalIcon } from './carousel.const';
interface Props extends CarouselOptions {
    data: CarouselSliderItem[];
    socials?: SocicalIcon[];
    navigationButtonType?: NavigationButtonType;
}
export type CarouselPromotionProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const CarouselPromotion: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default CarouselPromotion;
