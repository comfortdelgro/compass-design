import { AriaAttributes, AriaRole, CSSProperties, DOMAttributes as ReactDOMAttributes, KeyboardEvent as ReactKeyboardEvent, Ref } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export interface SliderProps<T = number | number[]> extends ValueBase<T> {
    step?: number;
    minValue?: number;
    maxValue?: number;
    tooltip?: boolean;
    isDisabled?: boolean;
    orientation?: Orientation;
    onChangeEnd?: (value: T) => void;
}
export interface SliderThumbProps extends FocusableProps {
    index?: number;
    isDisabled?: boolean;
    isRequired?: boolean;
    orientation?: Orientation;
}
export interface SliderBaseProps<T = number | number[]> extends SliderProps<T>, DOMProps, AriaAttributes {
}
export interface SliderThumbBaseProps extends SliderThumbProps, DOMProps, InputDOMProps, AriaAttributes {
}
export interface ValueBase<T, C = T> {
    value?: T;
    defaultValue?: T;
    onChange?: (value: C) => void;
}
export interface HoverEvent {
    target: HTMLElement;
    pointerType: 'mouse' | 'pen';
    type: 'hoverstart' | 'hoverend';
}
export type Orientation = 'horizontal' | 'vertical';
export type ValidationState = 'valid' | 'invalid';
export type KeyboardEvent = BaseEvent<ReactKeyboardEvent<never>>;
export type PointerType = 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual';
export interface FocusableElement extends Element, HTMLOrSVGElement {
}
export interface FocusEvents<Target = Element> {
    onFocusChange?: (isFocused: boolean) => void;
    onBlur?: (e: React.FocusEvent<Target>) => void;
    onFocus?: (e: React.FocusEvent<Target>) => void;
}
export interface KeyboardEvents {
    onKeyUp?: (e: KeyboardEvent) => void;
    onKeyDown?: (e: KeyboardEvent) => void;
}
export interface FocusableProps<Target = Element> extends FocusEvents<Target>, KeyboardEvents {
    autoFocus?: boolean;
}
export interface DOMProps {
    id?: string;
}
export interface InputDOMProps {
    name?: string;
}
export interface RangeValue<T> {
    start: T;
    end: T;
}
export interface DOMRefValue<T extends HTMLElement = HTMLElement> {
    UNSAFE_getDOMNode(): T;
}
export interface FocusableRefValue<T extends HTMLElement = HTMLElement, D extends HTMLElement = T> extends DOMRefValue<D> {
    focus(): void;
}
export type DOMRef<T extends HTMLElement = HTMLElement> = Ref<DOMRefValue<T>>;
export type FocusableRef<T extends HTMLElement = HTMLElement> = Ref<FocusableRefValue<T>>;
export interface SliderState {
    readonly step: number;
    readonly values: number[];
    readonly tooltip: boolean;
    readonly pageSize: number;
    readonly isDisabled: boolean;
    readonly orientation: Orientation;
    readonly focusedThumb: number | undefined;
    isThumbDragging(index: number): boolean;
    isThumbEditable(index: number): boolean;
    incrementThumb(index: number, stepSize?: number): void;
    decrementThumb(index: number, stepSize?: number): void;
    getThumbValue(index: number): number;
    getThumbPercent(index: number): number;
    getValuePercent(value: number): number;
    getThumbMinValue(index: number): number;
    getThumbMaxValue(index: number): number;
    getPercentValue(percent: number): number;
    setFocusedThumb(index: number | undefined): void;
    setThumbValue(index: number, value: number): void;
    setThumbPercent(index: number, percent: number): void;
    setThumbDragging(index: number, dragging: boolean): void;
    setThumbEditable(index: number, editable: boolean): void;
}
export interface DOMAttributes<T = FocusableElement> extends AriaAttributes, ReactDOMAttributes<T> {
    id?: string | undefined;
    role?: AriaRole | undefined;
    tabIndex?: number | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
}
export type BaseEvent<T extends React.SyntheticEvent> = T & {
    stopPropagation(): void;
    continuePropagation(): void;
};
interface BaseMoveEvent {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    pointerType: PointerType;
}
export interface MoveStartEvent extends BaseMoveEvent {
    type: 'movestart';
}
export interface MoveMoveEvent extends BaseMoveEvent {
    type: 'move';
    deltaX: number;
    deltaY: number;
}
export interface MoveEndEvent extends BaseMoveEvent {
    type: 'moveend';
}
export interface MoveEvents {
    onMove?: (e: MoveMoveEvent) => void;
    onMoveEnd?: (e: MoveEndEvent) => void;
    onMoveStart?: (e: MoveStartEvent) => void;
}
export {};
