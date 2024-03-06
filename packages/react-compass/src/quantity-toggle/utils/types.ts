/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AriaNumberFieldProps
  extends NumberFieldProps,
    TextInputDOMEvents {
  id?: string
  disableScroll?: boolean
  decrementAriaLabel?: string
  incrementAriaLabel?: string
  'aria-label'?: string
  'aria-details'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

export interface TextInputDOMProps extends DOMProps, TextInputDOMEvents {
  name?: string
  pattern?: string
  maxLength?: number
  minLength?: number
  placeholder?: string
  autoComplete?: string
  type?:
    | 'text'
    | 'search'
    | 'url'
    | 'tel'
    | 'email'
    | 'password'
    | (string & object)
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
}

export interface AriaLabelingProps {
  'aria-label'?: string
  'aria-details'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

export interface DOMProps {
  id?: string
}

export interface DOMAttributes<T = FocusableElement>
  extends React.AriaAttributes,
    React.DOMAttributes<T> {
  id?: string | undefined
  tabIndex?: number | undefined
  className?: string | undefined
  role?: React.AriaRole | undefined
  style?: React.CSSProperties | undefined
}

export interface FocusableElement extends Element, HTMLOrSVGElement {}

export interface NumberFieldProps
  extends InputBase,
    Validation,
    FocusableProps,
    TextInputBase,
    ValueBase<number>,
    RangeInputBase<number>,
    LabelableProps,
    HelpTextProps {
  formatOptions?: Intl.NumberFormatOptions
}

export interface HelpTextProps {
  description?: React.ReactNode
  errorMessage?: React.ReactNode
}

export interface LabelableProps {
  label?: React.ReactNode
}

export interface RangeInputBase<T> {
  step?: T
  minValue?: T
  maxValue?: T
}

export interface ValueBase<T, C = T> {
  value?: T
  defaultValue?: T
  onChange?: (value: C) => void
}

export interface TextInputBase {
  placeholder?: string
}

export type ValidationState = 'valid' | 'invalid'

export interface Validation {
  isRequired?: boolean
  validationState?: ValidationState
}

export interface InputBase {
  isDisabled?: boolean
  isReadOnly?: boolean
}
export interface TextInputDOMEvents {
  onInput?: FormEventHandler<HTMLInputElement>
  onSelect?: ReactEventHandler<HTMLInputElement>
  onCopy?: ClipboardEventHandler<HTMLInputElement>
  onCut?: ClipboardEventHandler<HTMLInputElement>
  onPaste?: ClipboardEventHandler<HTMLInputElement>
  onBeforeInput?: FormEventHandler<HTMLInputElement>
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement>
  onCompositionStart?: CompositionEventHandler<HTMLInputElement>
  onCompositionUpdate?: CompositionEventHandler<HTMLInputElement>
}

type CompositionEventHandler<T = Element> = React.EventHandler<
  React.CompositionEvent<T>
>

type ReactEventHandler<T = Element> = React.EventHandler<
  React.SyntheticEvent<T>
>

type FormEventHandler<T = Element> = React.EventHandler<React.FormEvent<T>>

type ClipboardEventHandler<T = Element> = React.EventHandler<
  React.ClipboardEvent<T>
>

export interface PressEvents {
  onPress?: (e: PressEvent) => void
  onPressUp?: (e: PressEvent) => void
  onPressEnd?: (e: PressEvent) => void
  onPressStart?: (e: PressEvent) => void
  onPressChange?: (isPressed: boolean) => void
}

export interface PressEvent {
  type: 'pressstart' | 'pressend' | 'pressup' | 'press'
  pointerType: 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual'
  target: Element
  altKey: boolean
  metaKey: boolean
  ctrlKey: boolean
  shiftKey: boolean
}

export interface FocusableProps<Target = Element>
  extends FocusEvents<Target>,
    KeyboardEvents {
  autoFocus?: boolean
}

export interface KeyboardEvents {
  onKeyUp?: (e: React.KeyboardEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
}

export interface FocusEvents<Target = Element> {
  onFocusChange?: (isFocused: boolean) => void
  onBlur?: (e: React.FocusEvent<Target>) => void
  onFocus?: (e: React.FocusEvent<Target>) => void
}

export interface NumberFieldState {
  minValue: number
  maxValue: number
  inputValue: string
  numberValue: number
  canIncrement: boolean
  canDecrement: boolean
  commit(): void
  increment(): void
  decrement(): void
  incrementToMax(): void
  decrementToMin(): void
  setInputValue(val: string): void
  validate(value: string): boolean
}

export interface TextFieldProps
  extends InputBase,
    Validation,
    HelpTextProps,
    FocusableProps,
    TextInputBase,
    ValueBase<string>,
    LabelableProps {}

export interface FocusableDOMProps extends DOMProps {
  excludeFromTabOrder?: boolean
}

export interface AriaValidationProps {
  'aria-errormessage'?: string
}

export interface AriaTextFieldProps
  extends TextFieldProps,
    AriaLabelingProps,
    FocusableDOMProps,
    TextInputDOMProps,
    AriaValidationProps,
    Omit<React.HTMLAttributes<HTMLInputElement>, keyof TextFieldProps> {
  'aria-activedescendant'?: string
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  'aria-haspopup'?:
    | boolean
    | 'false'
    | 'true'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog'
}

export interface FocusableElement extends Element, HTMLOrSVGElement {}

export interface NumberFormatOptions extends Intl.NumberFormatOptions {
  numberingSystem?: string
}

export type BaseEvent<T extends React.SyntheticEvent> = T & {
  stopPropagation(): void
  continuePropagation(): void
}

export type KeyboardEvent = BaseEvent<React.KeyboardEvent<any>>
