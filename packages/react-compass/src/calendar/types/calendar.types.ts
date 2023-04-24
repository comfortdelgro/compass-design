import {
  CalendarDate,
  CalendarDateTime,
  Time,
  ZonedDateTime,
} from '@internationalized/date'
import {
  AriaRole,
  CSSProperties,
  DragEvent,
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
  ReactNode,
  TouchEvent,
} from 'react'
import {AriaLabelingProps, DOMProps} from './label.types'
import {FocusableElement} from './scroll.types'

export type ValidationState = 'valid' | 'invalid'

export type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime

export interface RangeValue<T> {
  start: T
  end: T
}

interface CalendarStateBase {
  readonly isDisabled: boolean
  readonly isReadOnly: boolean
  readonly visibleRange: RangeValue<CalendarDate>
  readonly minValue?: DateValue
  readonly maxValue?: DateValue
  readonly timeZone: string
  readonly validationState: ValidationState
  readonly focusedDate: CalendarDate
  setFocusedDate(value: CalendarDate): void
  focusNextDay(): void
  focusPreviousDay(): void
  focusNextRow(): void
  focusPreviousRow(): void
  focusNextPage(): void
  focusPreviousPage(): void
  focusSectionStart(): void
  focusSectionEnd(): void
  focusNextSection(larger?: boolean): void
  focusPreviousSection(larger?: boolean): void
  selectFocusedDate(): void
  selectDate(date: CalendarDate): void
  readonly isFocused: boolean
  setFocused(value: boolean): void
  isInvalid(date: CalendarDate): boolean
  isSelected(date: CalendarDate): boolean
  isCellFocused(date: CalendarDate): boolean
  isCellDisabled(date: CalendarDate): boolean
  isCellUnavailable(date: CalendarDate): boolean
  isPreviousVisibleRangeInvalid(): boolean
  isNextVisibleRangeInvalid(): boolean
  getDatesInWeek(
    weekIndex: number,
    startDate?: CalendarDate,
  ): Array<CalendarDate | null>
}

export interface CalendarState extends CalendarStateBase {
  readonly value: CalendarDate
  setValue(value: CalendarDate): void
}

export interface RangeCalendarState extends CalendarStateBase {
  readonly value: RangeValue<DateValue>
  setValue(value: RangeValue<DateValue>): void
  highlightDate(date: CalendarDate): void
  readonly anchorDate: CalendarDate | null
  setAnchorDate(date: CalendarDate | null): void
  readonly highlightedRange: RangeValue<CalendarDate>
  readonly isDragging: boolean
  setDragging(isDragging: boolean): void
  close: () => void
}

export interface AriaCalendarCellProps {
  date: CalendarDate
  isDisabled?: boolean
}

export interface DOMAttributes extends AriaLabelingProps {
  id?: string | undefined
  role?: AriaRole | undefined
  tabIndex?: number | undefined
  style?: CSSProperties | undefined
  className?: string | undefined
  onKeyDown: (e: KeyboardEvent<FocusableElement>) => void
  onKeyUp: (e: KeyboardEvent<FocusableElement>) => void
  onClick: (e: MouseEvent<FocusableElement>) => void
  onPointerDown?: (e: PointerEvent<FocusableElement>) => void
  onMouseDown?: (e: MouseEvent<FocusableElement>) => void
  onPointerUp?: (e: PointerEvent<FocusableElement>) => void
  onDragStart?: (e: DragEvent<FocusableElement>) => void
  onMouseEnter?: (e: MouseEvent<FocusableElement>) => void
  onMouseLeave?: (e: MouseEvent<FocusableElement>) => void
  onMouseUp?: (e: MouseEvent<FocusableElement>) => void
  onTouchStart?: (e: TouchEvent<FocusableElement>) => void
  onTouchMove?: (e: TouchEvent<FocusableElement>) => void
  onTouchEnd?: (e: TouchEvent<FocusableElement>) => void
  onTouchCancel?: (e: TouchEvent<FocusableElement>) => void
  onFocus?: () => void
  onPointerEnter?: (e: PointerEvent<FocusableElement>) => void
  onContextMenu?: (e: MouseEvent<FocusableElement>) => void
}

export interface ActionButtonProps {
  onPress: () => void
  'aria-label': string
  isDisabled: boolean
  onFocus: () => void
  onBlur: () => void
}

export interface CalendarAria {
  title: string
  calendarProps: DOMProps | AriaLabelingProps | DOMAttributes
  nextButtonProps: ActionButtonProps
  prevButtonProps: ActionButtonProps
}

export interface CellProps {
  role: string
  'aria-disabled': boolean
  'aria-selected': boolean
  'aria-invalid': boolean
}

export interface CalendarCellAria {
  cellProps: CellProps
  buttonProps: DOMAttributes
  isPressed: boolean
  isSelected: boolean
  isFocused: boolean
  isDisabled: boolean
  isUnavailable: boolean
  isOutsideVisibleRange: boolean
  isInvalid: boolean
  formattedDate: string | undefined
  title?: string
  calendarProps?: CalendarProps
  nextButtonProps?: ActionButtonProps
  prevButtonProps?: ActionButtonProps
}

export interface CalendarProps {
  minValue?: DateValue
  maxValue?: DateValue
  isDateUnavailable?: (date: DateValue) => boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  autoFocus?: boolean
  focusedValue?: DateValue
  defaultFocusedValue?: DateValue
  onFocusChange?: (date: CalendarDate) => void
  validationState?: ValidationState
  errorMessage?: ReactNode
  role?: string
}

export type TimeValue = Time | CalendarDateTime | ZonedDateTime

export interface OverlayTriggerState {
  readonly isOpen: boolean
  setOpen(isOpen: boolean): void
  open(): void
  close(): void
  toggle(): void
}

export type Granularity = 'day' | 'hour' | 'minute' | 'second'

export interface DatePickerState extends OverlayTriggerState {
  value: DateValue
  setValue(value: DateValue): void
  dateValue: DateValue
  setDateValue(value: CalendarDate): void
  timeValue: TimeValue
  setTimeValue(value: TimeValue): void
  granularity: Granularity
  hasTime: boolean
  isOpen: boolean
  setOpen(isOpen: boolean): void
  validationState: ValidationState
}
