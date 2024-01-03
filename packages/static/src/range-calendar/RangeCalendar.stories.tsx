import {Meta} from '@storybook/react'
import React from 'react'
import RangeCalendar, {RangeCalendarShorcutItem, RangeValue} from '.'
import {Button, CalendarProps} from '..'
import {
  DateValue,
  endOfWeek,
  getLocalTimeZone,
  parseDate,
  startOfWeek,
  today,
} from '../internationalized/date'
import {useDateFormatter, useLocale} from '../internationalized/i18n'

export const Controlled = () => {
  const [range, setRange] = React.useState<RangeValue<CalendarProps | null>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})
  return (
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-gray20)'}}>
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
    </div>
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
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-gray20)'}}>
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
    </div>
  )
}

export const Custom = () => {
  return (
    <div style={{padding: '1rem'}}>
      <RangeCalendar
        css={{
          backgroundColor: 'var(--cdg-color-gray20)',
          border: '1px solid var(--cdg-color-gray50)',
          '& .disabled': {
            color: 'var(--cdg-color-gray60)',
            backgroundColor: 'var(--cdg-color-gray40)',
          },
          '& .disabled:hover': {
            color: 'var(--cdg-color-gray60)',
          },
        }}
        hasFooter
        hasShortcuts
      />
    </div>
  )
}

const meta = {
  title: 'Example/Range Calendar',
  component: Controlled,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Controlled>

export default meta
