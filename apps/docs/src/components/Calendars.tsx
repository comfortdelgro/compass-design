import {
  Calendar,
  RangeCalendar,
  RangeCalendarShorcutItem,
  RangeValue,
} from '@comfortdelgro/react-compass'
import {
  DateValue,
  endOfWeek,
  getLocalTimeZone,
  isWeekend,
  parseDate,
  startOfWeek,
  today,
} from '@internationalized/date'
import {useDateFormatter, useLocale} from '@react-aria/i18n'
import React from 'react'

export function ControlledCalendar() {
  const [date, setDate] = React.useState<DateValue>(
    parseDate(today(getLocalTimeZone()).toString()),
  )
  const formatter = useDateFormatter({dateStyle: 'full'})

  return (
    <>
      <p>
        <b>Selected date:</b>
        <span style={{marginLeft: '4px'}}>
          {formatter.format(date.toDate(getLocalTimeZone()))}
        </span>
      </p>
      <Calendar value={date} onChange={(e) => setDate(e)} />
    </>
  )
}

export function ValidatedCalendar() {
  const {locale} = useLocale()
  return <Calendar isDateUnavailable={(date) => isWeekend(date, locale)} />
}

export function ControlledRangeCalendar() {
  const [range, setRange] = React.useState<RangeValue<DateValue>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})
  return (
    <>
      {range &&
        formatter.formatRange(
          range.start.toDate(getLocalTimeZone()),
          range.end.toDate(getLocalTimeZone()),
        )}
      <RangeCalendar onChange={(e) => setRange(e as RangeValue<DateValue>)} />
    </>
  )
}

export function ValidatedRangeCalendar({
  contiguous = false,
}: {
  contiguous?: boolean
}) {
  const {locale} = useLocale()
  return (
    <RangeCalendar
      allowsNonContiguousRanges={contiguous}
      isDateUnavailable={(date) => isWeekend(date, locale)}
    />
  )
}

export function CustomizeShorcutsRangeCalendar() {
  const {locale} = useLocale()

  const dayOfTwoWeeksAgo = today(getLocalTimeZone()).subtract({
    weeks: 2,
  })
  const startOfTwoWeeksAgo = startOfWeek(dayOfTwoWeeksAgo, locale)
  const endOfTwoWeeksAgo = endOfWeek(dayOfTwoWeeksAgo, locale)

  return (
    <RangeCalendar
      hasShortcuts
      customShortcuts={(defaultShortcuts, isInvalid) => {
        const customShortcuts: RangeCalendarShorcutItem[] = [
          {
            label: 'Custom Shortcut (Two weeks ago)',
            isDisable:
              isInvalid(startOfTwoWeeksAgo) || isInvalid(endOfTwoWeeksAgo),
            getValue: () => {
              return {start: startOfTwoWeeksAgo, end: endOfTwoWeeksAgo}
            },
          },
        ]
        return [...defaultShortcuts, ...customShortcuts]
      }}
    />
  )
}
