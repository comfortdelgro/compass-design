import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CarouselOptions, CarouselSliderButton, CarouselSliderItem, SocicalIcon } from './carousel.const';
interface Props extends CarouselOptions {
    data: CarouselSliderItem[];
    buttons?: CarouselSliderButton[];
    socials?: SocicalIcon[];
    floatingContent?: boolean;
}
export type CarouselMobileProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const CarouselMobile: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default CarouselMobile;
