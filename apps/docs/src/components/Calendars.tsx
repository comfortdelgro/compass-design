import {Calendar, RangeCalendar, RangeValue} from '@comfortdelgro/react-compass'
import {
  DateValue,
  getLocalTimeZone,
  isWeekend,
  parseDate,
  today,
} from '@internationalized/date'
import {useDateFormatter, useLocale} from '@react-aria/i18n'
import React from 'react'

export function ControlledCalendar() {
  const [date, setDate] = React.useState<any>(
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
      {/* @ts-ignore */}
      <Calendar value={date} onChange={(e) => setDate(e)} />
    </>
  )
}

export function ValidatedCalendar() {
  const {locale} = useLocale()
  {/* @ts-ignore */}
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
      {/* @ts-ignore */}
      <RangeCalendar onChange={setRange} />
    </>
  )
}

export function ValidatedRangeCalendar({
  contiguos = false,
}: {
  contiguos?: boolean
}) {
  const {locale} = useLocale()
  return (
    <RangeCalendar
      // @ts-ignore
      allowsNonContiguousRanges={contiguos}
      // @ts-ignore
      isDateUnavailable={(date) => isWeekend(date, locale)}
    />
  )
}
