import {CalendarDate, DateValue} from '@internationalized/date'

export type ValidationState = 'valid' | 'invalid'

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

export interface HookData {
  ariaLabel: string
  ariaLabelledBy: string
  errorMessageId: string
  selectedDateDescription: string
}
