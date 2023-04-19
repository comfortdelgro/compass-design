import {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
} from '@internationalized/date'
import {AriaRole, CSSProperties, ReactNode} from 'react'

export type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime

export type ValidationState = 'valid' | 'invalid'

export interface AriaCalendarCellProps {
  date: CalendarDate
  isDisabled?: boolean
}

export interface DOMAttributes {
  id?: string | undefined
  role?: AriaRole | undefined
  tabIndex?: number | undefined
  style?: CSSProperties | undefined
  className?: string | undefined
  'aria-label'?: string
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
}

export interface CalendarCellAria {
  cellProps: any
  buttonProps: DOMAttributes
  isPressed: boolean
  isSelected: boolean
  isFocused: boolean
  isDisabled: boolean
  isUnavailable: boolean
  isOutsideVisibleRange: boolean
  isInvalid: boolean
  formattedDate: string
}

export interface CalendarProps {
  /** The minimum allowed date that a user may select. */
  minValue?: DateValue
  /** The maximum allowed date that a user may select. */
  maxValue?: DateValue
  /** Callback that is called for each date of the calendar. If it returns true, then the date is unavailable. */
  isDateUnavailable?: (date: DateValue) => boolean
  /**
   * Whether the calendar is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the calendar value is immutable.
   * @default false
   */
  isReadOnly?: boolean
  /**
   * Whether to automatically focus the calendar when it mounts.
   * @default false
   */
  autoFocus?: boolean
  /** Controls the currently focused date within the calendar. */
  focusedValue?: DateValue
  /** The date that is focused when the calendar first mounts (uncountrolled). */
  defaultFocusedValue?: DateValue
  /** Handler that is called when the focused date changes. */
  onFocusChange?: (date: CalendarDate) => void
  /** Whether the current selection is valid or invalid according to application logic. */
  validationState?: ValidationState
  /** An error message to display when the selected value is invalid. */
  errorMessage?: ReactNode
}
