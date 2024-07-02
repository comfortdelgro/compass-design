import { HTMLAttributes, ReactNode, RefObject } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DraggableOptions } from '../utils/hooks';
import { CSS } from '../utils/objectToCss';
type Props = {
    css?: CSS;
    icon?: ReactNode;
    label?: string;
    /**
     * Component theme color, value for `--slide-action-theme` CSS variable.
     *
     * @example
     * ```tsx
     * <SlideAction color='--cdg-color-cdgBlue'>...</SlideAction>
     * // or
     * <SlideAction color='var(--cdg-color-cdgBlue)'>...</SlideAction>
     * // or
     * <SlideAction color='#0142af'>...</SlideAction>
     * ```
     */
    color?: string;
    /**
     * Trigger when component's status changes
     * @type {SlideActionOnChange}
     */
    onChange?: (isSuccess: boolean) => void;
    /**
     * Trigger when users swiped all the way to the end. It will be considered as a successful or confirmatory action.
     *
     * Call the `reset()` function to reset the component status.
     * @type {SlideActionOnSwipeEnd}
     */
    onSwipeEnd?: (reset: () => void) => void;
    /**
     * ⚠️ Avoid enabling this flag as much as possible.
     *
     * If you wanna reset this component, please use the `reset()` function that shipped with `onSwipeEnd` instead.
     * ___
     * ⚠️ **Accessibility considerations** (Act unintentionally)
     *
     * Since an action is a successful action when they dragged/swiped this component all the way to the end.
     * If users tap & release without dragging, this component will assume that it is another successful or confirmatory action. As a result, onSwipeEnd will be re-triggered.
     *
     * @default false
     */
    allowSwipeAfterEnd?: boolean;
    compact?: boolean;
    /** @default 'default' */
    labelType?: 'default' | 'slide';
    /** @default 'static' */
    slideType?: 'static' | 'slide';
    /**
     * @deprecated No longer supported, it will be removed in the next major version. Set your the gradient effect to the `.cdg-slide-action__bg` class instead.
     * @default 'mono'
     */
    slideColor?: 'mono' | 'gradient';
};
/**
 * Trigger when users swiped all the way to the end. It will be considered as a successful or confirmatory action.
 *
 * Call the `reset()` function to reset the component status.
 */
export type SlideActionOnSwipeEnd = NonNullable<Props['onSwipeEnd']>;
export type SlideActionOnChange = NonNullable<Props['onChange']>;
export type SlideActionProps = Props & Omit<HTMLAttributes<HTMLDivElement>, keyof Props>;
export type SlideDraggerParams = {
    draggerWidth: number;
    maxSlideDistance: number;
};
export type SlideDraggerProps = {
    slideRef: RefObject<HTMLDivElement>;
    onDrag?: (slideDraggerInfo: SlideDraggerParams, ...params: Parameters<NonNullable<DraggableOptions['onMove']>>) => void;
    onDragEnd?: (slideDraggerInfo: SlideDraggerParams, ...params: Parameters<NonNullable<DraggableOptions['onEnd']>>) => void;
    disableDrag?: boolean;
};
export type SlideActionRef = HTMLDivElement & {
    resetState: () => void;
};
export {};
