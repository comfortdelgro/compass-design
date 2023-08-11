import {ElementType} from 'react'
import {CalendarDate, DateValue} from '../../internationalized/date'
import {CalendarProps} from '../calendar'
import {
  DOMAttributes,
  FieldOptions,
  Granularity,
  LabelableProps,
  OverlayTriggerState,
  RangeValue,
  TimeValue,
  ValidationState,
} from './calendar.types'
import {
  FocusableProps,
  HelpTextProps,
  Validation,
  ValueBase,
} from './common.types'
import {
  AriaBaseButtonProps,
  ButtonProps,
  LinkButtonProps,
} from './element.types'
import {InputBase} from './input.types'
import {AriaLabelingProps, DOMProps} from './label.types'

export interface OverlayTriggerProps {
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

interface DateFieldBase<T extends DateValue>
  extends InputBase,
    Validation,
    FocusableProps,
    LabelableProps,
    HelpTextProps,
    OverlayTriggerProps {
  minValue?: DateValue | null | undefined
  maxValue?: DateValue | null | undefined
  isDateUnavailable?: (date: DateValue) => boolean
  placeholderValue?: T
  hourCycle?: 12 | 24
  granularity?: Granularity
  hideTimeZone?: boolean
}

export interface DatePickerBase<T extends DateValue>
  extends DateFieldBase<T>,
    OverlayTriggerProps {}

export interface DatePickerProps<T extends DateValue>
  extends DatePickerBase<T>,
    ValueBase<T> {}

export interface DatePickerStateOptions<T extends DateValue>
  extends DatePickerProps<T> {
  shouldCloseOnSelect?: boolean | (() => boolean)
}

export interface DatePickerState extends OverlayTriggerState {
  value: DateValue
  setValue(value: DateValue): void
  dateValue?: DateValue
  setDateValue(value: CalendarDate): void
  timeValue?: TimeValue
  setTimeValue(value: TimeValue): void
  granularity: Granularity
  hasTime: boolean
  isOpen: boolean
  setOpen(isOpen: boolean): void
  validationState?: ValidationState
  formatValue(locale: string, fieldOptions: FieldOptions): string
}

export interface AriaDatePickerBaseProps<T extends DateValue>
  extends DatePickerBase<T>,
    AriaLabelingProps,
    DOMProps {}

export interface AriaDatePickerProps<T extends DateValue>
  extends DatePickerProps<T>,
    AriaDatePickerBaseProps<T> {}

export interface AriaButtonProps<T extends ElementType = 'button'>
  extends ButtonProps,
    LinkButtonProps<T>,
    AriaBaseButtonProps {}

export interface AriaDialogProps extends DOMProps, AriaLabelingProps {
  role?: 'dialog' | 'alertdialog'
}

export interface DatePickerAria {
  labelProps: DOMAttributes
  groupProps: DOMAttributes
  fieldProps: AriaDatePickerProps<DateValue>
  buttonProps: AriaButtonProps
  descriptionProps: DOMAttributes
  errorMessageProps: DOMAttributes
  dialogProps: AriaDialogProps
  calendarProps: CalendarProps
}

export type DateRange = RangeValue<DateValue | null>

export type TimeRange = RangeValue<TimeValue>

export interface DateRangePickerState extends OverlayTriggerState {
  value?: DateRange
  setValue(value: DateRange): void
  dateRange: DateRange
  setDateRange(value: DateRange): void
  timeRange: TimeRange
  setTimeRange(value: TimeRange): void
  setDate(part: 'start' | 'end', value: DateValue): void
  setTime(part: 'start' | 'end', value: TimeValue): void
  setDateTime(part: 'start' | 'end', value: DateValue): void
  granularity: Granularity
  hasTime: boolean
  isOpen: boolean
  setOpen(isOpen: boolean): void
  validationState: ValidationState
  formatValue(
    locale: string,
    fieldOptions: FieldOptions,
  ): {start: string; end: string}
}
