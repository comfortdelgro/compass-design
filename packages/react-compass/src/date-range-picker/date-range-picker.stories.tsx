import {DateValue, getLocalTimeZone, parseDate} from '@internationalized/date'
import {StoryDecorator} from '@ladle/react'
import {I18nProvider, useDateFormatter} from '@react-aria/i18n'
import type {RangeValue} from '@react-types/shared'
import React from 'react'
import {Column} from '../utils'
import DateRangePicker from './date-range-picker'

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
  const [range, setRange] = React.useState<RangeValue<DateValue>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})
  return (
    <I18nProvider locale='en-SG'>
      <h3>Controlled</h3>
      {range &&
        formatter.formatRange(
          range.start.toDate(getLocalTimeZone()),
          range.end.toDate(getLocalTimeZone()),
        )}
      <DateRangePicker value={range} onChange={setRange} />
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
