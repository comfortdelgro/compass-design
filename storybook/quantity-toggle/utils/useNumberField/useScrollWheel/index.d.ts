import { RefObject } from '../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export interface ScrollEvent {
    deltaX: number;
    deltaY: number;
}
export interface ScrollEvents {
    onScroll?: (e: ScrollEvent) => void;
}
export interface ScrollWheelProps extends ScrollEvents {
    isDisabled?: boolean;
}
export default function useScrollWheel(props: ScrollWheelProps, ref: RefObject<HTMLElement>): void;
