/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {
  DateFormatter,
  DateValue,
  GregorianCalendar,
  toCalendar,
} from '@internationalized/date'
import {useEffect, useMemo, useRef, useState} from 'react'
import {EDITABLE_SEGMENTS, PAGE_STEP, TYPE_MAPPING} from '../constants/common'
import {
  DateFieldState,
  DateFieldStateOptions,
  DateSegment,
  FieldOptions,
  FormatterOptions,
  ValidationState,
} from '../types'
import {
  addSegment,
  convertValue,
  createPlaceholderDate,
  getFormatOptions,
  getPlaceholder,
  getSegmentLimits,
  isInvalid,
} from '../utils'
import {useControlledState} from './useControlledState'
import {useDefaultProps} from './useDefaultProps'

export function useDateFieldState<T extends DateValue = DateValue>(
  props: DateFieldStateOptions<T>,
): DateFieldState {
  const {
    locale,
    createCalendar,
    hideTimeZone,
    isDisabled,
    isReadOnly,
    isRequired,
  } = props

  const v = props.value || props.defaultValue || props.placeholderValue
  const [granularity, defaultTimeZone] = useDefaultProps(
    v as DateValue,
    props.granularity,
  )
  const timeZone = defaultTimeZone || 'UTC'

  // props.granularity must actually exist in the value if one is provided.
  if (v && !(granularity in v)) {
    throw new Error(
      'Invalid granularity ' + granularity + ' for value ' + v.toString(),
    )
  }

  const defaultFormatter = useMemo(() => new DateFormatter(locale), [locale])
  const calendar = useMemo(
    () => createCalendar(defaultFormatter.resolvedOptions().calendar),
    [createCalendar, defaultFormatter],
  )

  const [value, setDate] = useControlledState(
    props.value,
    props.defaultValue,
    props.onChange,
  )

  const calendarValue = useMemo(
    () => convertValue(value, calendar),
    [value, calendar],
  )

  const [placeholderDate, setPlaceholderDate] = useState(() =>
    createPlaceholderDate(
      props.placeholderValue,
      granularity,
      calendar,
      defaultTimeZone,
    ),
  )

  const val = calendarValue || placeholderDate
  const showEra = calendar.identifier === 'gregory' && val?.era === 'BC'
  const formatOpts = useMemo(
    () => ({
      granularity,
      maxGranularity: props.maxGranularity ?? 'year',
      timeZone: defaultTimeZone,
      hideTimeZone,
      hourCycle: props.hourCycle,
      showEra,
    }),
    [
      props.maxGranularity,
      granularity,
      props.hourCycle,
      defaultTimeZone,
      hideTimeZone,
      showEra,
    ],
  )
  const opts = useMemo(
    () => getFormatOptions({}, formatOpts as FormatterOptions),
    [formatOpts],
  )

  const dateFormatter = useMemo(
    () => new DateFormatter(locale, opts),
    [locale, opts],
  )
  const resolvedOptions = useMemo(
    () => dateFormatter.resolvedOptions(),
    [dateFormatter],
  )

  const allSegments: Partial<typeof EDITABLE_SEGMENTS> = useMemo(
    () =>
      dateFormatter
        .formatToParts(new Date())
        // @ts-ignore
        .filter((seg) => EDITABLE_SEGMENTS[seg.type])
        // @ts-ignore
        .reduce((p, seg) => ((p[seg.type] = true), p), {}),
    [dateFormatter],
  )

  // @ts-ignore
  let [validSegments, setValidSegments] = useState<
    Partial<typeof EDITABLE_SEGMENTS>
  >(() => (props.value || props.defaultValue ? {...allSegments} : {}))

  // Reset placeholder when calendar changes
  const lastCalendarIdentifier = useRef(calendar.identifier)
  useEffect(() => {
    if (calendar.identifier !== lastCalendarIdentifier.current) {
      lastCalendarIdentifier.current = calendar.identifier
      // @ts-ignore
      setPlaceholderDate((placeholder) =>
        Object.keys(validSegments).length > 0
          ? toCalendar(placeholder as DateValue, calendar)
          : createPlaceholderDate(
              props.placeholderValue,
              granularity,
              calendar,
              defaultTimeZone,
            ),
      )
    }
  }, [
    calendar,
    granularity,
    validSegments,
    defaultTimeZone,
    props.placeholderValue,
  ])

  // If there is a value prop, and some segments were previously placeholders, mark them all as valid.
  if (
    value &&
    Object.keys(validSegments).length < Object.keys(allSegments).length
  ) {
    validSegments = {...allSegments}
    setValidSegments(validSegments)
  }

  // If the value is set to null and all segments are valid, reset the placeholder.
  if (
    value == null &&
    Object.keys(validSegments).length === Object.keys(allSegments).length
  ) {
    validSegments = {}
    setValidSegments(validSegments)
    setPlaceholderDate(
      createPlaceholderDate(
        props.placeholderValue,
        granularity,
        calendar,
        defaultTimeZone,
      ),
    )
  }

  const displayValue =
    calendarValue &&
    Object.keys(validSegments).length >= Object.keys(allSegments).length
      ? calendarValue
      : (placeholderDate as unknown as DateValue)
  const setValue = (newValue: DateValue) => {
    if (props.isDisabled || props.isReadOnly) {
      return
    }

    if (Object.keys(validSegments).length >= Object.keys(allSegments).length) {
      newValue = toCalendar(newValue, v?.calendar || new GregorianCalendar())
      // @ts-ignore
      setDate(newValue)
    } else {
      setPlaceholderDate(newValue)
    }
  }

  const dateValue = useMemo(
    () => displayValue.toDate(timeZone),
    [displayValue, timeZone],
  )
  const segments = useMemo(
    () =>
      // @ts-ignore
      dateFormatter.formatToParts(dateValue).map((segment) => {
        // @ts-ignore
        let isEditable = EDITABLE_SEGMENTS[segment.type]
        if (segment.type === 'era' && calendar.getEras().length === 1) {
          isEditable = false
        }

        let isPlaceholder =
          // @ts-ignore
          EDITABLE_SEGMENTS[segment.type] && !validSegments[segment.type]
        // @ts-ignore
        let placeholder = EDITABLE_SEGMENTS[segment.type]
          ? getPlaceholder(segment.type, segment.value)
          : null
        return {
          // @ts-ignore
          type: TYPE_MAPPING[segment.type] || segment.type,
          text: isPlaceholder ? placeholder : segment.value,
          // @ts-ignore
          ...getSegmentLimits(displayValue, segment.type, resolvedOptions),
          isPlaceholder,
          placeholder,
          isEditable,
        } as DateSegment
      }),
    [
      dateValue,
      validSegments,
      dateFormatter,
      resolvedOptions,
      displayValue,
      calendar,
      locale,
    ],
  )

  if (allSegments.era && validSegments.year && !validSegments.era) {
    validSegments.era = true
    setValidSegments({...validSegments})
  } else if (!allSegments.era && validSegments.era) {
    delete validSegments.era
    setValidSegments({...validSegments})
  }

  const markValid = (part: Intl.DateTimeFormatPartTypes) => {
    // @ts-ignore
    validSegments[part] = true
    if (part === 'year' && allSegments.era) {
      validSegments.era = true
    }
    setValidSegments({...validSegments})
  }

  const adjustSegment = (
    type: Intl.DateTimeFormatPartTypes,
    amount: number,
  ) => {
    // @ts-ignore
    if (!validSegments[type]) {
      markValid(type)
      if (
        Object.keys(validSegments).length >= Object.keys(allSegments).length
      ) {
        setValue(displayValue)
      }
    } else {
      // @ts-ignore
      setValue(addSegment(displayValue, type, amount, resolvedOptions))
    }
  }

  // @ts-ignore
  const validationState: ValidationState =
    props.validationState ||
    (isInvalid(
      calendarValue as DateValue,
      props.minValue as DateValue,
      props.maxValue as DateValue,
    )
      ? 'invalid'
      : null)

  return {
    // @ts-ignore
    value: calendarValue,
    dateValue,
    calendar,
    setValue,
    segments,
    dateFormatter,
    validationState,
    granularity,
    maxGranularity: props.maxGranularity ?? 'year',
    isDisabled,
    isReadOnly,
    isRequired,
    increment(part) {
      adjustSegment(part, 1)
    },
    decrement(part) {
      adjustSegment(part, -1)
    },
    incrementPage(part) {
      // @ts-ignore
      adjustSegment(part, PAGE_STEP[part] || 1)
    },
    decrementPage(part) {
      // @ts-ignore
      adjustSegment(part, -(PAGE_STEP[part] || 1))
    },
    setSegment(part, v) {
      markValid(part)
      // @ts-ignore
      setValue(setSegment(displayValue, part, v, resolvedOptions))
    },
    confirmPlaceholder() {
      if (props.isDisabled || props.isReadOnly) {
        return
      }

      // Confirm the placeholder if only the day period is not filled in.
      const validKeys = Object.keys(validSegments)
      const allKeys = Object.keys(allSegments)
      if (
        validKeys.length === allKeys.length - 1 &&
        allSegments.dayPeriod &&
        !validSegments.dayPeriod
      ) {
        validSegments = {...allSegments}
        setValidSegments(validSegments)
        setValue(displayValue.copy())
      }
    },
    clearSegment(part) {
      // @ts-ignore
      delete validSegments[part]
      setValidSegments({...validSegments})

      const placeholder = createPlaceholderDate(
        props.placeholderValue,
        granularity,
        calendar,
        defaultTimeZone,
      )
      let value = displayValue

      // Reset day period to default without changing the hour.
      if (
        part === 'dayPeriod' &&
        'hour' in displayValue &&
        // @ts-ignore
        'hour' in placeholder
      ) {
        const isPM = displayValue.hour >= 12
        const shouldBePM = placeholder.hour >= 12
        if (isPM && !shouldBePM) {
          value = displayValue.set({hour: displayValue.hour - 12})
        } else if (!isPM && shouldBePM) {
          value = displayValue.set({hour: displayValue.hour + 12})
        }
      } else if (part in displayValue) {
        // @ts-ignore
        value = displayValue.set({[part]: placeholder[part]})
      }
      // @ts-ignore
      setDate(null)
      setValue(value)
    },
    formatValue(fieldOptions: FieldOptions) {
      if (!calendarValue) {
        return ''
      }
      // @ts-ignore
      const formatOptions = getFormatOptions(fieldOptions, formatOpts)
      const formatter = new DateFormatter(locale, formatOptions)
      return formatter.format(dateValue)
    },
  }
}
