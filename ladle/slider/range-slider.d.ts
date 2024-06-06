import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { SliderControlsProps } from './component/SliderControls';
import { RangeValue } from './utils/types';
export interface RangeSliderProps extends SliderControlsProps<RangeValue<number>> {
    css?: CSS;
    tooltip?: boolean;
}
declare const RangeSlider: React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLDivElement>>;
export default RangeSlider;
