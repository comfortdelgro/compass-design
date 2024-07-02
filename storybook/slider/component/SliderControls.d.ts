import React, { ReactNode, RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { SliderBaseProps, SliderState, ValueBase } from '../utils/types';
export interface SliderControlsChildArguments {
    inputRef: RefObject<HTMLInputElement>;
    trackRef: RefObject<HTMLElement>;
    state: SliderState;
}
export interface SliderControlsProps<T = number[]> extends SliderBaseProps<T>, ValueBase<T> {
    children?: (opts: SliderControlsChildArguments) => ReactNode;
}
declare const _SliderControls: React.ForwardRefExoticComponent<SliderControlsProps<number[]> & React.RefAttributes<import("../utils/types").FocusableRefValue<HTMLDivElement, HTMLDivElement>>>;
export { _SliderControls as SliderControls };
