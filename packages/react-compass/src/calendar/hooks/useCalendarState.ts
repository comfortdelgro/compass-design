import {
  AnyCalendarDate,
  Calendar,
  CalendarDate,
  createCalendar,
  DateFormatter,
  toCalendar,
  toCalendarDate,
  today,
} from '@internationalized/date'
import {useMemo, useState} from 'react'
import {alignCenter, constrainValue} from '../utils/calendar'
import {useControlledState} from './useControlledState'

interface CalendarStateProps {
  locale: string
  createCalendar?: (name: string) => Calendar
  defaultFocusedValue?: AnyCalendarDate
}

export const useCalendarState2 = ({
  locale,
  defaultFocusedValue,
}: CalendarStateProps) => {
  const minValue = undefined
  const maxValue = undefined
  const timeZone = 'Asia/Saigon'
  const valueProp = null
  const defaultValueProp = null
  const focusedValueProps = undefined
  const onChangeProp = () => {
    console.log('on change')
  }
  const onFocusChangeProp = () => {
    console.log('onFocusChange')
  }

  const defaultFormatter = useMemo(() => new DateFormatter(locale), [locale])
  const resolvedOptions = useMemo(
    () => defaultFormatter.resolvedOptions(),
    [defaultFormatter],
  )
  const calendar = useMemo(
    () => createCalendar(resolvedOptions.calendar),
    [createCalendar, resolvedOptions.calendar],
  )
  const [value, setControlledValue] = useControlledState(
    valueProp,
    defaultValueProp,
    onChangeProp,
  )


  const calendarDateValue = useMemo(
    () => (value ? toCalendar(toCalendarDate(value), calendar) : null),
    [value, calendar],
  )

  const focusedCalendarDate = useMemo(
    () =>
      focusedValueProps
        ? constrainValue(
            toCalendar(toCalendarDate(focusedValueProps), calendar),
            minValue,
            maxValue,
          )
        : undefined,
    [focusedValueProps, calendar, minValue, maxValue],
  )

  const defaultFocusedCalendarDate = useMemo(
    () =>
      constrainValue(
        defaultFocusedValue
          ? toCalendar(toCalendarDate(defaultFocusedValue), calendar)
          : calendarDateValue ?? toCalendar(today(timeZone), calendar),
        minValue,
        maxValue,
      ),
    [
      defaultFocusedValue,
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
    const duration = {months: 1}

    return startDate.add(duration)
  }, [startDate])

  console.log(startDate, 'hello')

  return {
    timeZone: 'Asia/Saigon',
    visibleRange: {
      start: startDate,
      end: endDate,
    },
  }
}
