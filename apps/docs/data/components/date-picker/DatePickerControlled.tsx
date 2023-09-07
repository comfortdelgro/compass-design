import {
  Calendar,
  CalendarProps,
  DatePicker,
  useDateFormatter,
} from '@comfortdelgro/react-compass'
import React from 'react'

const {getLocalTimeZone, today, parseDate} = Calendar.InternationalizedDate

function DatePickerControlled() {
  const [date, setDate] = React.useState<CalendarProps>(
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
      <DatePicker
        calendarCSS={{
          '.cdg-calendar-today-btn': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        label='Date'
        value={date}
        defaultValue={today(getLocalTimeZone())}
        onChange={setDate}
      />
    </>
  )
}

export default DatePickerControlled
