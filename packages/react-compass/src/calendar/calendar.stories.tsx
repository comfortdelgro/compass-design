import {DateValue, getLocalTimeZone, parseDate} from '@internationalized/date'
import {useDateFormatter} from '@react-aria/i18n'
import type {RangeValue} from '@react-types/shared'
import React from 'react'
import DateRangepicker from './date-range-picker'

export const Variants: React.FC = () => {
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
      <DateRangepicker onChange={(e) => setRange(e)} />
    </>
  )
}
