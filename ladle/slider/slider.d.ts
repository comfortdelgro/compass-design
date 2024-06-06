import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { SliderControlsProps } from './component/SliderControls';
import { InputDOMProps } from './utils/types';
export interface SliderProps extends SliderControlsProps<number>, InputDOMProps {
    css?: CSS;
    tooltip?: boolean;
}
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;
export default Slider;
