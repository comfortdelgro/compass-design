import type {Meta} from '@storybook/react'
import React from 'react'
import Calendar, {CalendarProps} from '.'

const {useDateFormatter} = Calendar.I18N
const {getLocalTimeZone, parseDate, today} = Calendar.InternationalizedDate

export const Basic = () => {
  const [date, setDate] = React.useState<CalendarProps>(
    parseDate(today(getLocalTimeZone()).toString()),
  )
  const formatter = useDateFormatter({dateStyle: 'full'})

  return (
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-gray20)'}}>
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
        minValue={today(getLocalTimeZone())}
        onChange={(e) => {
          setDate(e)
        }}
        hasFooter
      />
    </div>
  )
}

export const Customized = () => {
  return (
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-white)'}}>
      <Calendar
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
      />
    </div>
  )
}

const meta = {
  title: 'Example/Calendar',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
