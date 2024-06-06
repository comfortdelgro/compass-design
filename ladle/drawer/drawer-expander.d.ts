import { HTMLAttributes, PropsWithChildren } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DraggableOptions } from '../utils/hooks/useDrag';
import { CSS } from '../utils/objectToCss';
type Props = PropsWithChildren<{
    drawerOpen: boolean;
    onDragPositionYChange?: (yAxis: number) => void;
    onDragStart?: DraggableOptions['onStart'];
    onDrag?: DraggableOptions['onMove'];
    onDragEnd?: DraggableOptions['onEnd'];
}>;
export type DrawerExpanderProps = Props & {
    css?: CSS;
} & Omit<HTMLAttributes<HTMLDivElement>, keyof Props>;
/**
 * @note This component is draggable.
 *
 * On touch device, it will be re-render (to reflect with the user's drag actions)
 * many more times than when being 'dragged' by a mouse.
 */
declare const DrawerExpander: ({ drawerOpen, className, children, css, onDragPositionYChange, onDragStart, onDrag, onDragEnd, ...htmlDivAttributes }: DrawerExpanderProps) => JSX.Element;
export default DrawerExpander;
