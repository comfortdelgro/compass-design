import { RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { SliderState, SliderThumbBaseProps } from '../utils/types';
interface SliderThumbProps extends SliderThumbBaseProps {
    trackRef: RefObject<HTMLElement>;
    inputRef?: RefObject<HTMLInputElement>;
    state: SliderState;
}
export declare function SliderThumb(props: SliderThumbProps): JSX.Element;
export {};
