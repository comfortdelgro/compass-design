import { useEffect } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import type { SlideDraggerProps } from './slide-action.types';
/** This hook works the same way as `useEffect` but it's not trigger on first render */
export declare const useLazyEffect: typeof useEffect;
export declare const useSlideActionDragger: ({ slideRef, onDrag, onDragEnd, disableDrag, }: SlideDraggerProps) => {
    slideDraggerRef: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefObject<HTMLButtonElement>;
    setDraggerPosition: (position: {
        x: number;
        y: number;
    }, options?: {
        transition?: string | true;
        skipCalulateStep?: boolean;
        shouldUpdatePositionState?: boolean;
    }) => void;
};
