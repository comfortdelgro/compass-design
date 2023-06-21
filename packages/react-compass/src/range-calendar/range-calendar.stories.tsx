import {
  DateValue,
  endOfWeek,
  getLocalTimeZone,
  parseDate,
  startOfWeek,
  today,
} from '@internationalized/date'
import {StoryDecorator} from '@ladle/react'
import {useDateFormatter, useLocale} from '@react-aria/i18n'
import type {RangeValue} from '@react-types/shared'
import React from 'react'
import Button from '../button'
import {CalendarProps} from '../calendar'
import {Column} from '../utils'
import RangeCalendar from './range-calendar'
import {RangeCalendarShorcutItem} from './range-calendar-shortcuts'

export const Controlled: React.FC = () => {
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

export const Variants: React.FC = () => {
  const {locale} = useLocale()

  const dayOfTwoWeeksAgo = today(getLocalTimeZone()).subtract({
    weeks: 2,
  })
  const startOfTwoWeeksAgo = startOfWeek(dayOfTwoWeeksAgo, locale)
  const endOfTwoWeeksAgo = endOfWeek(dayOfTwoWeeksAgo, locale)

  return (
    <Column>
      <h3>Footer</h3>
      <RangeCalendar hasFooter />
      <h3>Footer & Shorcuts</h3>
      <RangeCalendar
        hasFooter
        hasShortcuts
        onSearchButtonClick={() => {
          alert('search button callback')
        }}
      />
      <h3>Custom Footer & Custom Shorcuts</h3>
      <RangeCalendar
        hasFooter
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
        ctaButtonRender={
          <Button
            onPress={() => {
              alert('Custom callback')
            }}
          >
            Custom Button
          </Button>
        }
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
