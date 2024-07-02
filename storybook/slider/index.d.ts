/// <reference types="react" />
import RangeSlider from './range-slider';
export type { RangeSliderProps } from './range-slider';
export type { SliderProps } from './slider';
declare const Slider: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<import("./slider").SliderProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>> & {
    Range: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<import("./range-slider").RangeSliderProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
} & {
    Range: typeof RangeSlider;
};
export default Slider;
