import {CalendarDate, DateValue} from '@internationalized/date'
import {
  FieldOptions,
  Granularity,
  TimeValue,
  ValidationState,
} from './calendar.types'
import {
  FocusableProps,
  HelpTextProps,
  LabelableProps,
  Validation,
  ValueBase,
} from './common.types'
import {InputBase} from './input.types'

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
  minValue?: DateValue
  maxValue?: DateValue
  isDateUnavailable?: (date: DateValue) => boolean
  placeholderValue?: T
  hourCycle?: 12 | 24
  granularity?: Granularity
  hideTimeZone?: boolean
}

interface DatePickerBase<T extends DateValue>
  extends DateFieldBase<T>,
    OverlayTriggerProps {}

export interface DatePickerProps<T extends DateValue>
  extends DatePickerBase<T>,
    ValueBase<T> {}

export interface DatePickerStateOptions<T extends DateValue>
  extends DatePickerProps<T> {
  shouldCloseOnSelect?: boolean | (() => boolean)
}

export interface OverlayTriggerState {
  readonly isOpen: boolean
  setOpen(isOpen: boolean): void
  open(): void
  close(): void
  toggle(): void
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
