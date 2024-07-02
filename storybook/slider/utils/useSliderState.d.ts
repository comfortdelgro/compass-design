import { SliderProps, SliderState } from './types';
export interface SliderStateOptions<T> extends SliderProps<T> {
}
export declare function useSliderState<T extends number | number[]>(props: SliderStateOptions<T>): SliderState;
