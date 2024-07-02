import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { SliderControlsProps } from './component/SliderControls';
import RangeSlider from './range-slider';
import { InputDOMProps } from './utils/types';
export interface SliderProps extends SliderControlsProps<number>, InputDOMProps {
    css?: CSS;
    tooltip?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>> & {
    Range: typeof RangeSlider;
};
export default _default;
