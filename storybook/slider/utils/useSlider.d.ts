import { RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DOMAttributes, SliderBaseProps, SliderState } from './types';
export interface SliderAria {
    trackProps: DOMAttributes;
}
export declare function useSlider<T extends number | number[]>(props: SliderBaseProps<T>, state: SliderState, trackRef: RefObject<Element>): SliderAria;
