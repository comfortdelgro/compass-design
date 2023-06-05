import {DateValue, getLocalTimeZone, parseDate} from '@internationalized/date'
import {StoryDecorator} from '@ladle/react'
import {useDateFormatter} from '@react-aria/i18n'
import type {RangeValue} from '@react-types/shared'
import React from 'react'
import {CalendarProps} from '../calendar'
import {Column} from '../utils'
import RangeCalendar from './range-calendar'

export const Variants: React.FC = () => {
  const [range, setRange] = React.useState<RangeValue<CalendarProps | null>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})
  return (
    <Column>
      {range.start && range.end
        ? formatter.formatRange(
            range.start.toDate(getLocalTimeZone()),
            range.end.toDate(getLocalTimeZone()),
          )
        : `${
            range.start &&
            formatter.format(range.start.toDate(getLocalTimeZone()))
          } - ${
            range.end && formatter.format(range.end.toDate(getLocalTimeZone()))
          }`}
      {}

      <RangeCalendar
        value={range}
        onChange={(e) => {
          setRange(e as RangeValue<DateValue>)
        }}
        hasFooter
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
