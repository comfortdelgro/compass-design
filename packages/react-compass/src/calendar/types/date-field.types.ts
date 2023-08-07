import {Calendar, DateValue} from '../../internationalized/date'
import {
  DOMAttributes,
  Granularity,
  LabelableProps,
  SegmentType,
} from './calendar.types'
import {
  FocusableProps,
  HelpTextProps,
  Validation,
  ValueBase,
} from './common.types'
import {DatePickerProps, OverlayTriggerProps} from './date-picker.types'
import {InputBase} from './input.types'
import {AriaLabelingProps, DOMProps} from './label.types'

export interface DateFieldStateOptions<T extends DateValue = DateValue>
  extends DatePickerProps<T> {
  maxGranularity?: 'year' | 'month' | Granularity
  locale: string

  createCalendar: (name: string) => Calendar
}

export interface DateSegment {
  type: SegmentType
  text: string
  value?: number
  minValue?: number
  maxValue?: number
  isPlaceholder: boolean
  placeholder: string
  isEditable: boolean
}

export interface DateFieldBase<T extends DateValue>
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

export interface DateFieldProps<T extends DateValue>
  extends DateFieldBase<T>,
    ValueBase<T | null> {}

interface AriaDateFieldBaseProps<T extends DateValue>
  extends DateFieldBase<T>,
    AriaLabelingProps,
    DOMProps {}

export interface AriaDateFieldProps<T extends DateValue>
  extends DateFieldProps<T>,
    AriaDateFieldBaseProps<T> {}

export type AriaDateFieldOptions<T extends DateValue> = Omit<
  AriaDateFieldProps<T>,
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'minValue'
  | 'maxValue'
  | 'placeholderValue'
>

export interface DateFieldAria {
  labelProps: DOMAttributes
  fieldProps: DOMAttributes
  descriptionProps: DOMAttributes
  errorMessageProps: DOMAttributes
}

export interface DateSegmentAria {
  segmentProps: DOMAttributes
}

type Field =
  | 'era'
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'dayPeriod'
  | 'timeZoneName'
  | 'weekday'

export interface DisplayNames {
  of(field: Field): string
}

export interface ScrollIntoViewportOpts {
  containingElement?: Element
}
