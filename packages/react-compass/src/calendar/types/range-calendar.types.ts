import {Calendar, DateValue} from '../../internationalized/date'
import {CalendarPropsBase, RangeValue} from './calendar.types'
import {ValueBase} from './common.types'
import {DateDuration} from './internationalized.types'
import {AriaLabelingProps, DOMProps} from './label.types'

export interface RangeCalendarProps<T extends DateValue>
  extends CalendarPropsBase,
    ValueBase<RangeValue<T> | null> {
  allowsNonContiguousRanges?: boolean
  shouldOnChangeTriggerOnSameDate?: boolean
}

export interface RangeCalendarStateOptions<T extends DateValue = DateValue>
  extends RangeCalendarProps<T> {
  locale: string
  createCalendar: (name: string) => Calendar
  visibleDuration?: DateDuration
}

export interface AriaRangeCalendarProps<T extends DateValue>
  extends RangeCalendarProps<T>,
    DOMProps,
    AriaLabelingProps {}
