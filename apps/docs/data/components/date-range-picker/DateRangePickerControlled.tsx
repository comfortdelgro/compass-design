import {
  Calendar,
  CalendarProps,
  DateRangePicker,
  RangeValue,
  useDateFormatter,
} from '@comfortdelgro/react-compass'
import React from 'react'

const {getLocalTimeZone, parseDate} = Calendar.InternationalizedDate

function ControlledDateRangePicker() {
  const [range, setRange] =
    React.useState<RangeValue<CalendarProps> | null>({
      start: parseDate('2020-02-03'),
      end: parseDate('2020-02-08'),
    })
  const formatter = useDateFormatter({dateStyle: 'long'})

  const onChangeDateRangePicker = (
    value: RangeValue<CalendarProps> | null,
  ) => {
    setRange(value as RangeValue<CalendarProps>)
  }

  return (
    <>
      {range &&
        range.start &&
        range.end &&
        formatter.formatRange(
          range.start.toDate(getLocalTimeZone()),
          range.end.toDate(getLocalTimeZone()),
        )}
      <DateRangePicker value={range} onChange={onChangeDateRangePicker} />
    </>
  )
}

export default ControlledDateRangePicker
