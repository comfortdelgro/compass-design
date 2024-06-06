import * as React from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import type { IProps, TEvent } from './types';
declare class List extends React.Component<IProps> {
    listRef: React.RefObject<HTMLUListElement>;
    ghostRef: React.RefObject<HTMLLIElement>;
    topOffsets: number[];
    itemTranslateOffsets: number[];
    initialYOffset: number;
    lastScroll: number;
    lastYOffset: number;
    lastListYOffset: number;
    dropTimeout?: number;
    needle: number;
    afterIndex: number;
    state: {
        itemDragged: number;
        itemDraggedOutOfBounds: number;
        selectedItem: number;
        initialX: number;
        initialY: number;
        targetX: number;
        targetY: number;
        targetHeight: number;
        targetWidth: number;
        scrollingSpeed: number;
        scrollWindow: boolean;
    };
    schdOnPointerMove: {
        (e: PointerEvent): void;
        cancel(): void;
    };
    schdOnEnd: {
        (e: PointerEvent): void;
        cancel(): void;
    };
    constructor(props: IProps);
    componentDidMount(): void;
    componentDidUpdate(_prevProps: IProps, prevState: {
        scrollingSpeed: number;
    }): void;
    componentWillUnmount(): void;
    doScrolling: () => void;
    getChildren: () => Element[];
    calculateOffsets: () => void;
    getTargetIndex: (e: TEvent) => number;
    onPointerStart: (event: PointerEvent) => void;
    getYOffset: () => number;
    onStart: (target: HTMLElement, clientX: number, clientY: number, index: number) => void;
    onPointerMove: (event: PointerEvent) => void;
    onWheel: (e: React.WheelEvent) => void;
    onMove: (clientX: number, clientY: number) => any;
    moveOtherItems: () => void;
    autoScrolling: (clientY: number) => void;
    animateItems: (needle: number, movedItem: number, offset: number, animateMovedItem?: boolean) => void;
    isDraggedItemOutOfBounds: () => boolean;
    onEnd: (event: PointerEvent) => void;
    finishDrop: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    render(): JSX.Element;
}
export default List;
