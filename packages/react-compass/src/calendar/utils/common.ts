import {CalendarState, DateValue, HookData, RangeCalendarState} from '../types'

export const hookData = new WeakMap<
  CalendarState | RangeCalendarState,
  HookData
>()

export function isInvalid(
  date: DateValue,
  minValue: DateValue,
  maxValue: DateValue,
) {
  return (
    (minValue != null && date.compare(minValue) < 0) ||
    (maxValue != null && date.compare(maxValue) > 0)
  )
}
