/// <reference types="react" />
import { SlideDraggerProps } from './slide-action.types';
/**
 * @note This component is draggable.
 *
 * It will be re-render (to reflect with the user's drag actions) and how frequently is
 * depend on the `stepSize` option of `useDrag` hook.
 */
export default function SlideDragger({ slideRef, icon, onDrag, onDragEnd, disableDrag, }: SlideDraggerProps): JSX.Element;
