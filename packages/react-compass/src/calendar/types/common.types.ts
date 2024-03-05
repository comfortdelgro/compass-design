/* eslint-disable @typescript-eslint/no-explicit-any */
import {FocusEvent, ReactNode} from 'react'
import {ValidationState} from './calendar.types'
import {DatePickerProps} from './date-picker.types'

export interface HookData {
  ariaLabel: string
  ariaLabelledBy: string
  errorMessageId: string
  selectedDateDescription: string
  focusManager?: unknown
}

export interface EventPoint {
  clientX: number
  clientY: number
  width: number
  height: number
  radiusX?: number
  radiusY?: number
}

export interface Rect {
  top: number
  right: number
  bottom: number
  left: number
}

export interface ValueBase<T, C = T> {
  value?: T | null
  defaultValue?: T
  onChange?: (value: C) => void
}

export interface Validation {
  validationState?: ValidationState
  isRequired?: boolean
}

export interface HelpTextProps {
  description?: ReactNode
  errorMessage?: ReactNode
}

export interface KeyboardEvents {
  onKeyDown?: (e: KeyboardEvent) => void
  onKeyUp?: (e: KeyboardEvent) => void
}

export interface FocusEvents<Target = Element> {
  onFocus?: (e: FocusEvent<Target>) => void
  onBlur?: (e: FocusEvent<Target>) => void
  onFocusChange?: (isFocused: boolean) => void
}

export interface FocusableProps<Target = Element>
  extends FocusEvents<Target>,
    KeyboardEvents {
  autoFocus?: boolean
}

export interface FormatterOptions {
  timeZone?: string
  hideTimeZone?: boolean
  granularity?: DatePickerProps<any>['granularity']
  maxGranularity?: 'year' | 'month' | DatePickerProps<any>['granularity']
  hourCycle?: 12 | 24
  showEra?: boolean
}
