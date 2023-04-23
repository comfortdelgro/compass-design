import {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
} from '@internationalized/date'
import {AriaRole, CSSProperties, ReactNode} from 'react'
import {AriaLabelingProps} from './label.types'

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
  onKeyDown: (e: KeyboardEvent) => void
  onKeyUp: (e: PointerEvent) => void
  onClick: (e: MouseEvent) => void
  onPointerDown?: (e: PointerEvent) => void
  onMouseDown?: (e: MouseEvent) => void
  onPointerUp?: (e: PointerEvent) => void
  onDragStart?: (e: DragEvent) => void
  onMouseEnter?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
  onMouseUp?: (e: MouseEvent) => void
  onTouchStart?: (e: TouchEvent) => void
  onTouchMove?: (e: TouchEvent) => void
  onTouchEnd?: (e: TouchEvent) => void
  onTouchCancel?: (e: TouchEvent) => void
  onFocus?: () => void
  onPointerEnter?: (e: PointerEvent) => void
  onContextMenu?: (e: MouseEvent) => void
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
  calendarProps: CalendarProps
  nextButtonProps: ActionButtonProps
  prevButtonProps: ActionButtonProps
}

export interface CellProps {
  role: string
  'aria-disabled': boolean | null
  'aria-selected': boolean | null
  'aria-invalid': boolean | null
}

export interface CalendarCellAria extends CalendarAria {
  cellProps: CellProps
  buttonProps: DOMAttributes
  isPressed: boolean
  isSelected: boolean
  isFocused: boolean
  isDisabled: boolean
  isUnavailable: boolean
  isOutsideVisibleRange: boolean
  isInvalid: boolean
  formattedDate: string
  calendarProps: CalendarProps
  title: string
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
  ['aria-describedby']: string | undefined
}
