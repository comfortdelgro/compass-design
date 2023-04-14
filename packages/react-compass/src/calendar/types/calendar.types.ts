import {CalendarDate} from '@internationalized/date'

export interface AriaCalendarCellProps {
  date: CalendarDate
  isDisabled?: boolean
}

export interface CalendarCellAria {
  cellProps: any
  buttonProps: any
  isPressed: boolean
  isSelected: boolean
  isFocused: boolean
  isDisabled: boolean
  isUnavailable: boolean
  isOutsideVisibleRange: boolean
  isInvalid: boolean
  formattedDate: string
}
