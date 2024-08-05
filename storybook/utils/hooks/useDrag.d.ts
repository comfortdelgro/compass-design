import { type RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
type DragPosition = {
    x: number;
    y: number;
};
type SetPosition = (position: DragPosition, options?: {
    /**
     * CSS transition for the position change.
     *
     * Note that this hook will transform the target element by using CSS [translate](https://developer.mozilla.org/docs/Web/CSS/translate) if the browser supports it, otherwise `transform`.
     * ___
     * If `true`, the transition will be
     * `{property} 500ms cubic-bezier(0.32, 0.72, 0, 1)` - `transition-property` is [translate](https://developer.mozilla.org/docs/Web/CSS/translate) if the browser supports it, otherwise `transform`.
     * @default undefined // no transition
     */
    transition?: string | true;
    /**
     * If `stepSize` > 0 and you wanna manually update the position, consider set this option to `true` to skip the default calculation.
     * @default false
     */
    skipCalulateStep?: boolean;
    /**
     * By default, the hook will transform the target element for you.
     *
     * Enable this flag to allow update the returned `position` state and manually handle the transform animation,
     * your component will rerender on every position value change.
     *
     * @default false
     */
    shouldUpdatePositionState?: boolean;
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
     * Listen touch events
     * ___
     * ***Note***: This hook will treat pointer events caused by a pen or stylus device (`pointerType === 'pen'`) same as touch events.
     *
     * @default true
     */
    touch?: boolean;
    /**
     * Listen mouse's main button events (usually left-click)
     * @default true
     */
    mouse?: boolean;
    /**
     * Dragging direction
     * @default 'both'
     */
    direction?: 'vertical' | 'horizontal' | 'both';
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
     * Allow dragging over the limit, and enable deceleration effect.
     *
     * After releasing (`pointercancel` or `pointerup` event),
     * the target element will move back to the nearest limit position.
     * ___
     * Only available when `limit` is provided.
     * @default false
     */
    decelerationEffect?: boolean;
    /**
     * Set to `true` to allow update position state onMove and manually handle styling such as CSS transform.
     * @default false
     */
    manualStylingOnMove?: boolean;
    /**
     * Enable debouncing for the `setPosition` setter in millisecond (ms). Used for manually handling the moving transform animation (`manualStylingOnMove = true`)
     * by using returned position state instead of the `onMove` event.
     *
     * It doesn't affect the default `onMove` transform animation (`manualStylingOnMove = false`).
     * @default 0
     */
    returnedPositionDebounceTime?: number;
    /**
     * Position step size
     * @default 0
     */
    stepSize?: number | DragPosition;
    onStart?: (target: RefObject<T>, position: DragPosition, setPosition: SetPosition) => void;
    /**
     * Callback function that triggers when users dragging the HTML element.
     *
     * Recommend passing a memorized function or a function from the parent of the component that contains draggable element.
     */
    onMove?: (target: RefObject<T>, position: DragPosition) => void;
    onEnd?: (target: RefObject<T>, position: DragPosition, setPosition: SetPosition) => void;
    /**
     * By default, the hook will add `will-change: transform` and `touch-action: none` to the target element.
     * @default true
     */
    addBrowserHintStyles?: boolean;
    /** @default false */
    ignorePointerCancel?: boolean;
    /**
     * If `true`, the target element won't draggable anymore.
     * ___
     * Equivalent to `touch === false && mouse === false`
     * ___
     * @default false
     */
    disabled?: boolean;
};
export declare const useDrag: <T extends HTMLElement = HTMLElement>(options?: DraggableOptions<T>) => {
    /**
     * Target element ref.
     * @returns a RefObject of `null` if `options.targetRef` is provided or the target element is not found.
     */
    target: RefObject<T>;
    /** Position state {x, y} */
    position: DragPosition;
    /** Function to set a new position value. */
    setPosition: SetPosition;
};
export {};
