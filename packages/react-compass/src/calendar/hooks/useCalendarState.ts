import {
  Calendar,
  CalendarDate,
  DateDuration,
  DateFormatter,
  endOfMonth,
  getDayOfWeek,
  GregorianCalendar,
  isSameDay,
  startOfMonth,
  startOfWeek,
  toCalendar,
  toCalendarDate,
  today,
} from '@internationalized/date'
import {useMemo, useRef, useState} from 'react'
import {DateValue, ValidationState} from '../types'
import {
  alignCenter,
  alignStart,
  constrainStart,
  constrainValue,
  isInvalid,
  previousAvailableDate,
} from '../utils'
import {useControlledState} from './useControlledState'

interface VisibleDuration {
  months: number
}

function unitDuration(duration: DateDuration) {
  const unit = {...duration}
  for (const key in duration) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    unit[key] = 1
  }
  return unit
}

export interface ValueBase<T, C = T> {
  /** The current value (controlled). */
  value?: T
  /** The default value (uncontrolled). */
  defaultValue?: T
  /** Handler that is called when the value changes. */
  onChange?: (value: C) => void
}
interface CalendarStateProps extends ValueBase<DateValue> {
  locale: string
  createCalendar: (name: string) => Calendar
  visibleDuration?: VisibleDuration
  minValue?: DateValue
  maxValue?: DateValue
  focusedValue?: DateValue
  defaultFocusedValue?: DateValue
  autoFocus?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  isDateUnavailable?: (date: DateValue) => boolean
  validationState?: ValidationState
  onChange?: (date: DateValue) => void
}

export const useCalendarState = (props: CalendarStateProps) => {
  const {
    locale,
    createCalendar,
    visibleDuration = {months: 1},
    minValue,
    maxValue,
    isDateUnavailable,
    onChange,
  } = props
  const onFocusChangeProp = () => {
    console.log('onFocusChange')
  }

  const [value, setControlledValue] = useControlledState(
    props.value,
    props.defaultValue,
    onChange,
  )

  const defaultFormatter = useMemo(() => new DateFormatter(locale), [locale])
  const resolvedOptions = useMemo(
    () => defaultFormatter.resolvedOptions(),
    [defaultFormatter],
  )
  const timeZone = useMemo(
    () =>
      value && 'timeZone' in value ? value.timeZone : resolvedOptions.timeZone,
    [value, resolvedOptions.timeZone],
  )
  const calendar = useMemo(
    () => createCalendar(resolvedOptions.calendar),
    [createCalendar, resolvedOptions.calendar],
  )

  const calendarDateValue = useMemo(
    () => (value ? toCalendar(toCalendarDate(value), calendar) : null),
    [value, calendar],
  )

  const focusedCalendarDate = useMemo(
    () =>
      props.focusedValue
        ? constrainValue(
            toCalendar(toCalendarDate(props.focusedValue), calendar),
            minValue,
            maxValue,
          )
        : undefined,
    [props.focusedValue, calendar, minValue, maxValue],
  )

  const defaultFocusedCalendarDate = useMemo(
    () =>
      constrainValue(
        props.defaultFocusedValue
          ? toCalendar(toCalendarDate(props.defaultFocusedValue), calendar)
          : calendarDateValue ?? toCalendar(today(timeZone), calendar),
        minValue,
        maxValue,
      ),
    [
      props.defaultFocusedValue,
      calendarDateValue,
      timeZone,
      calendar,
      minValue,
      maxValue,
    ],
  )

  const [focusedDate, setFocusedDate] = useControlledState(
    focusedCalendarDate,
    defaultFocusedCalendarDate,
    onFocusChangeProp,
  )

  const [isFocused, setFocused] = useState(props.autoFocus || false)

  const [startDate, setStartDate] = useState(() => {
    return alignCenter(
      focusedDate as CalendarDate,
      {months: 1},
      locale,
      minValue,
      maxValue,
    )
  })

  const endDate = useMemo(() => {
    const duration = {...visibleDuration}

    return startDate.add(duration)
  }, [startDate])

  const lastCalendarIdentifier = useRef(calendar.identifier)
  if (calendar.identifier !== lastCalendarIdentifier.current && focusedDate) {
    const newFocusedDate = toCalendar(focusedDate, calendar)
    setStartDate(
      alignCenter(newFocusedDate, visibleDuration, locale, minValue, maxValue),
    )
    setFocusedDate(newFocusedDate)
    lastCalendarIdentifier.current = calendar.identifier
  }

  if (
    focusedDate &&
    minValue &&
    maxValue &&
    isInvalid(focusedDate, minValue, maxValue)
  ) {
    // If the focused date was moved to an invalid value, it can't be focused, so constrain it.
    setFocusedDate(constrainValue(focusedDate, minValue, maxValue))
  } else if (focusedDate && focusedDate.compare(startDate) < 0) {
    setStartDate(
      alignCenter(focusedDate, visibleDuration, locale, minValue, maxValue),
    )
  } else if (focusedDate && focusedDate.compare(endDate) > 0) {
    setStartDate(
      alignCenter(focusedDate, visibleDuration, locale, minValue, maxValue),
    )
  }

  function focusCell(date: CalendarDate) {
    date = constrainValue(date, minValue, maxValue)
    setFocusedDate(date)
  }

  function setValue(newValue: CalendarDate) {
    if (!props.isDisabled && !props.isReadOnly) {
      newValue = constrainValue(newValue, minValue, maxValue)
      newValue = previousAvailableDate(
        newValue,
        startDate,
        isDateUnavailable,
      ) as CalendarDate
      if (!newValue) {
        return
      }

      // The display calendar should not have any effect on the emitted value.
      // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
      newValue = toCalendar(
        newValue,
        value?.calendar ?? (new GregorianCalendar() as Calendar),
      )

      // Preserve time if the input value had one.
      if (value && 'hour' in value) {
        setControlledValue(value.set(newValue))
      } else {
        setControlledValue(newValue)
      }
    }
  }

  const isUnavailable = useMemo(() => {
    if (!minValue || !maxValue) return true
    if (!calendarDateValue) {
      return false
    }

    if (isDateUnavailable && isDateUnavailable(calendarDateValue)) {
      return true
    }

    return isInvalid(calendarDateValue, minValue, maxValue)
  }, [calendarDateValue, isDateUnavailable, minValue, maxValue])

  const validationState =
    props.validationState || (isUnavailable ? 'invalid' : null)

  return {
    isDisabled: props.isDisabled,
    isReadOnly: props.isReadOnly,
    value: calendarDateValue,
    setValue,
    visibleRange: {
      start: startDate,
      end: endDate,
    },
    minValue,
    maxValue,
    focusedDate,
    timeZone,
    validationState,
    setFocusedDate(date: CalendarDate) {
      focusCell(date)
      setFocused(true)
    },
    focusNextDay() {
      if (focusedDate) focusCell(focusedDate.add({days: 1}))
    },
    focusPreviousDay() {
      if (focusedDate) focusCell(focusedDate.subtract({days: 1}))
    },
    focusNextRow() {
      if (focusedDate) focusCell(focusedDate.add({weeks: 1}))
    },
    focusPreviousRow() {
      if (focusedDate) focusCell(focusedDate.subtract({weeks: 1}))
    },
    focusNextPage() {
      const start = startDate.add(visibleDuration)
      if (focusedDate)
        setFocusedDate(
          constrainValue(focusedDate.add(visibleDuration), minValue, maxValue),
        )
      setStartDate(
        alignStart(
          constrainStart(
            focusedDate as CalendarDate,
            start,
            visibleDuration,
            locale,
            minValue,
            maxValue,
          ),
          visibleDuration,
          locale,
        ),
      )
    },
    focusPreviousPage() {
      const start = startDate.subtract(visibleDuration)
      if (focusedDate)
        setFocusedDate(
          constrainValue(
            focusedDate.subtract(visibleDuration),
            minValue,
            maxValue,
          ),
        )
      setStartDate(
        alignStart(
          constrainStart(
            focusedDate as CalendarDate,
            start,
            visibleDuration,
            locale,
            minValue,
            maxValue,
          ),
          visibleDuration,
          locale,
        ),
      )
    },
    focusSectionStart() {
      if (visibleDuration.months) {
        focusCell(startOfMonth(focusedDate as CalendarDate))
      }
    },
    focusSectionEnd() {
      if (visibleDuration.months) {
        focusCell(endOfMonth(focusedDate as CalendarDate))
      }
    },
    focusNextSection(larger: boolean) {
      if (!focusedDate) return
      if (!larger) {
        focusCell(focusedDate.add(unitDuration(visibleDuration)))
        return
      } else {
        focusCell(focusedDate.add({years: 1}))
      }
    },
    focusPreviousSection(larger: boolean) {
      if (!focusedDate) return
      if (!larger) {
        focusCell(focusedDate.subtract(unitDuration(visibleDuration)))
        return
      } else {
        focusCell(focusedDate.subtract({years: 1}))
      }
    },
    selectFocusedDate() {
      setValue(focusedDate as CalendarDate)
    },
    selectDate(date: CalendarDate) {
      setValue(date)
    },
    isFocused,
    setFocused,
    isInvalid(date: CalendarDate) {
      return isInvalid(date, minValue as DateValue, maxValue as DateValue)
    },
    isSelected(date: CalendarDate) {
      return (
        calendarDateValue != null &&
        isSameDay(date, calendarDateValue) &&
        !this.isCellDisabled(date) &&
        !this.isCellUnavailable(date)
      )
    },
    isCellFocused(date: CalendarDate) {
      return isFocused && focusedDate && isSameDay(date, focusedDate)
    },
    isCellDisabled(date: CalendarDate) {
      return (
        props.isDisabled ||
        date.compare(startDate) < 0 ||
        date.compare(endDate) > 0 ||
        this.isInvalid(date)
      )
    },
    isCellUnavailable(date: CalendarDate) {
      return props.isDateUnavailable && props.isDateUnavailable(date)
    },
    isPreviousVisibleRangeInvalid() {
      const prev = startDate.subtract({days: 1})
      return isSameDay(prev, startDate) || this.isInvalid(prev)
    },
    isNextVisibleRangeInvalid() {
      // Adding may return the same date if we reached the end of time
      // according to the calendar system (e.g. 9999-12-31).
      const next = endDate.add({days: 1})
      return isSameDay(next, endDate) || this.isInvalid(next)
    },
    getDatesInWeek(weekIndex: number, from = startDate) {
      // let date = startOfWeek(from, locale);
      let date = from.add({weeks: weekIndex})
      const dates = []

      date = startOfWeek(date, locale)

      // startOfWeek will clamp dates within the calendar system's valid range, which may
      // start in the middle of a week. In this case, add null placeholders.
      const dayOfWeek = getDayOfWeek(date, locale)
      for (let i = 0; i < dayOfWeek; i++) {
        dates.push(null)
      }

      while (dates.length < 7) {
        dates.push(date)
        const nextDate = date.add({days: 1})
        if (isSameDay(date, nextDate)) {
          // If the next day is the same, we have hit the end of the calendar system.
          break
        }
        date = nextDate
      }

      // Add null placeholders if at the end of the calendar system.
      while (dates.length < 7) {
        dates.push(null)
      }

      return dates
    },
  }
}
