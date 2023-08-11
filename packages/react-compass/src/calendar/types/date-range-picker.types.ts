import {DateValue} from '../../internationalized/date'
import {
  CalendarPropsBase,
  DOMAttributes,
  RangeValue,
  SpectrumDatePickerBase,
} from './calendar.types'
import {ValueBase} from './common.types'
import {
  AriaButtonProps,
  AriaDatePickerBaseProps,
  AriaDatePickerProps,
  AriaDialogProps,
  DatePickerBase,
} from './date-picker.types'
import {AriaLabelingProps, DOMProps} from './label.types'

export interface DateRangePickerProps<T extends DateValue>
  extends DatePickerBase<T>,
    ValueBase<RangeValue<T> | null> {
  allowsNonContiguousRanges?: boolean
}

export interface DateRangePickerStateOptions<T extends DateValue = DateValue>
  extends DateRangePickerProps<T> {
  shouldCloseOnSelect?: boolean | (() => boolean)
}

export interface AriaDateRangePickerProps<T extends DateValue>
  extends AriaDatePickerBaseProps<T>,
    DateRangePickerProps<T> {}

export interface RangeCalendarProps<T extends DateValue | null>
  extends CalendarPropsBase,
    ValueBase<RangeValue<T> | null> {
  allowsNonContiguousRanges?: boolean
}

export interface DateRangePickerAria {
  labelProps: DOMAttributes
  groupProps: DOMAttributes
  startFieldProps: AriaDatePickerProps<DateValue>
  endFieldProps: AriaDatePickerProps<DateValue>
  buttonProps: AriaButtonProps
  descriptionProps: DOMAttributes
  errorMessageProps: DOMAttributes
  dialogProps: AriaDialogProps
  calendarProps: RangeCalendarProps<DateValue | null>
}

export interface SpectrumDateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T>,
    SpectrumDatePickerBase {}

export interface AriaRangeCalendarProps<T extends DateValue>
  extends RangeCalendarProps<T>,
    DOMProps,
    AriaLabelingProps {}

export interface SpectrumRangeCalendarProps<T extends DateValue>
  extends AriaRangeCalendarProps<T> {
  visibleMonths?: number
}
