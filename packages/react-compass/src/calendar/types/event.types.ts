import {RefObject} from 'react'
import {DOMAttributes} from './calendar.types'
import {Validation, ValueBase} from './common.types'
import {AriaButtonProps} from './date-picker.types'
import {InputBase, RangeInputBase} from './input.types'
import {FocusableElement} from './scroll.types'

export interface PressHookProps extends PressProps {
  ref?: RefObject<Element>
}

export interface PressProps extends PressEvents {
  isPressed?: boolean
  isDisabled?: boolean
  preventFocusOnPress?: boolean
  shouldCancelOnPointerExit?: boolean
  allowTextSelectionOnPress?: boolean
}

export interface PressEvents {
  onPress?: (e: PressEvent) => void
  onPressStart?: (e: PressEvent) => void
  onPressEnd?: (e: PressEvent) => void
  onPressChange?: (isPressed: boolean) => void
  onPressUp?: (e: PressEvent) => void
}

export interface PressEvent {
  type: 'pressstart' | 'pressend' | 'pressup' | 'press'
  pointerType: PointerType
  target: Element
  shiftKey: boolean
  ctrlKey: boolean
  metaKey: boolean
  altKey: boolean
}

export type PointerType = 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual'

export interface PressResult {
  isPressed: boolean
  pressProps: DOMAttributes
}

export interface FocusManagerOptions {
  from?: Element
  tabbable?: boolean
  wrap?: boolean
  accept?: (node: Element) => boolean
}

export interface FocusManager {
  focusNext(opts?: FocusManagerOptions): FocusableElement
  focusPrevious(opts?: FocusManagerOptions): FocusableElement
  focusFirst(opts?: FocusManagerOptions): FocusableElement
  focusLast(opts?: FocusManagerOptions): FocusableElement
}

export type ScopeRef = RefObject<Element[]>

export interface FocusWithinProps {
  isDisabled?: boolean
  onFocusWithin?: (e: FocusEvent) => void
  onBlurWithin?: (e: FocusEvent) => void
  onFocusWithinChange?: (isFocusWithin: boolean) => void
}

export interface FocusWithinResult {
  focusWithinProps: DOMAttributes
}

export interface SpinButtonProps
  extends InputBase,
    Validation,
    ValueBase<number>,
    RangeInputBase<number> {
  textValue?: string
  onIncrement?: () => void
  onIncrementPage?: () => void
  onDecrement?: () => void
  onDecrementPage?: () => void
  onDecrementToMin?: () => void
  onIncrementToMax?: () => void
}

export interface SpinbuttonAria {
  spinButtonProps: DOMAttributes
  incrementButtonProps: AriaButtonProps
  decrementButtonProps: AriaButtonProps
}
