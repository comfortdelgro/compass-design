import {Calendar, CalendarProps, Column} from '@comfortdelgro/react-compass'
import React from 'react'

const {useDateFormatter} = Calendar.I18N
const {getLocalTimeZone, parseDate, today} = Calendar.InternationalizedDate

const Variants: React.FC = () => {
  const [date, setDate] = React.useState<CalendarProps>(
    parseDate(today(getLocalTimeZone()).toString()),
  )
  const formatter = useDateFormatter({dateStyle: 'full'})

  return (
    <Column>
      <p>
        <b>Selected date:</b>
        <span style={{marginLeft: '4px'}}>
          {date
            ? formatter.format(date.toDate(getLocalTimeZone()))
            : 'Invalid date'}
        </span>
      </p>
      <Calendar
        value={date}
        // maxValue={today(getLocalTimeZone())}
        minValue={today(getLocalTimeZone())}
        onChange={(e) => {
          setDate(e)
        }}
        hasFooter
      />
    </Column>
  )
}

export default Variants
