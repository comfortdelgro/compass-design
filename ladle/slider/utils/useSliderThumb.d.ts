import { InputHTMLAttributes, RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DOMAttributes, SliderState, SliderThumbBaseProps } from './types';
export interface SliderThumbAria {
    isFocused: boolean;
    isDragging: boolean;
    isDisabled: boolean;
    thumbProps: DOMAttributes;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
}
export interface SliderThumbOptions extends SliderThumbBaseProps {
    trackRef: RefObject<Element>;
    inputRef: RefObject<HTMLInputElement>;
}
export declare function useSliderThumb(opts: SliderThumbOptions, state: SliderState): SliderThumbAria;
