import { RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
type DragPosition = {
    x: number;
    y: number;
};
type SetPosition = (position: DragPosition, options?: {
    transition?: string;
    skipCalulateStep?: boolean;
}) => void;
export type DraggableOptions<T extends HTMLElement = HTMLElement> = {
    /**
     * Ref to drag element
     * This hook will tracking the provided ref element
     * instead of its own target ref (and also won't return it anymore).
     * @default undefined
     */
    targetRef?: RefObject<T>;
    /**
     * use Event.preventDefault with the touchmove events
     * @default true
     */
    prevent?: boolean;
    /**
     * Listen touch events
     * @default true
     */
    touch?: boolean;
    /**
     * Listen mouse events
     * @default true
     */
    mouse?: boolean;
    /**
     * Dragging direction
     * @default 'both'
     */
    direction?: 'vertical' | 'horizontal' | 'both';
    /** Set css transform
     * @default true
     */
    setCSS?: boolean;
    /** Limit dragging distance */
    limit?: {
        x?: {
            max?: number;
            min?: number;
        };
        y?: {
            max?: number;
            min?: number;
        };
    };
    /**
     * Position step size
     * @default 0
     */
    stepSize?: number | {
        x: number;
        y: number;
    };
    onStart?: (target: RefObject<T>, position: DragPosition, setPosition: SetPosition) => void;
    /**
     * Callback function that triggers when users dragging the HTML element.
     *
     * Recommend passing a memorized function or a function from the parent of the component that contains draggable element.
     */
    onMove?: (target: RefObject<T>, position: DragPosition) => void;
    onEnd?: (target: RefObject<T>, position: DragPosition, setPosition: SetPosition) => void;
    /**
     * If `true`, the target element won't draggable anymore.
     * ___
     * Equivalent with `touch === false && mouse === false`
     * ___
     * @default false
     */
    disabled?: boolean;
};
declare const useDrag: <T extends HTMLElement = HTMLElement>(options?: DraggableOptions<T>) => {
    /**
     * Target element ref.
     * @returns `undefined` if `options.targetRef` is provided
     */
    target: RefObject<T>;
    /** Position state {x, y} */
    position: DragPosition;
    /** Function to set a new position value. */
    setPosition: SetPosition;
};
export default useDrag;
