import {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
} from '@internationalized/date'
import {AriaRole, CSSProperties} from 'react'

export type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime

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
