import {StoryDecorator} from '@ladle/react'
import type {RangeValue} from '@react-types/shared'
import React from 'react'
import {DateValue} from '../calendar/types'
import {Column} from '../utils'
import Calendar, {CalendarProps} from './../calendar'
import DateRangePicker from './date-range-picker'

const {I18nProvider, useDateFormatter} = Calendar.I18N
const {getLocalTimeZone, parseDate} = Calendar.InternationalizedDate

export const Variants: React.FC = () => {
  return (
    <I18nProvider locale='en-SG'>
      <Column>
        <h3>Basic</h3>
        <DateRangePicker startDateLabel='Start date' endDateLabel='End date' />
        <br />
        <h3>Disabled</h3>
        <DateRangePicker
          isDisabled
          startDateLabel='Start date'
          endDateLabel='End date'
        />
        <h3>Invalid</h3>
        <DateRangePicker
          isInvalid
          startDateLabel='Start date'
          endDateLabel='End date'
        />
      </Column>
    </I18nProvider>
  )
}

export const Controlled: React.FC = () => {
  const [range, setRange] = React.useState<RangeValue<CalendarProps>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})
  return (
    <I18nProvider locale='en-SG'>
      <h3>Controlled</h3>
      {range
        ? formatter.formatRange(
            range.start.toDate(getLocalTimeZone()),
            range.end.toDate(getLocalTimeZone()),
          )
        : 'Invalid range of dates'}
      <DateRangePicker
        value={range}
        onChange={(e) => setRange(e as RangeValue<DateValue>)}
      />
    </I18nProvider>
  )
}

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
