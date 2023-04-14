import {CalendarState, HookData, RangeCalendarState} from '../types'

export const hookData = new WeakMap<
  CalendarState | RangeCalendarState,
  HookData
>()
