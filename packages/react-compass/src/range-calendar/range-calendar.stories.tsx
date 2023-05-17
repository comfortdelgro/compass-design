import {DateValue, getLocalTimeZone, parseDate} from '@internationalized/date'
import {StoryDecorator} from '@ladle/react'
import {useDateFormatter} from '@react-aria/i18n'
import type {RangeValue} from '@react-types/shared'
import React from 'react'
import {Column} from '../utils'
import RangeCalendar from './range-calendar'

export const Variants: React.FC = () => {
  const [range, setRange] = React.useState<RangeValue<DateValue>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})
  return (
    <Column>
      {range &&
        formatter.formatRange(
          range.start.toDate(getLocalTimeZone()),
          range.end.toDate(getLocalTimeZone()),
        )}
      <RangeCalendar
        value={range}
        onChange={(e) => setRange(e as RangeValue<DateValue>)}
      />
    </Column>
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
