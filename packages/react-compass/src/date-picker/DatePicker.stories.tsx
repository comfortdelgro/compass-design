import {Meta} from '@storybook/react'
import {useState} from 'react'
import {CalendarProps} from '..'
import {getLocalTimeZone, parseDate, today} from '../internationalized/date'
import {I18nProvider, useDateFormatter} from '../internationalized/i18n'
import DatePicker from './date-picker'

export const Basic = () => {
  const [date, setDate] = useState<CalendarProps | null>(
    parseDate(today(getLocalTimeZone()).toString()),
  )

  const formatter = useDateFormatter({dateStyle: 'full'})

  return (
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-gray20)'}}>
      <I18nProvider locale='en-SG'>
        <p>
          <b>Selected date:</b>
          <span style={{marginLeft: '4px'}}>
            {date ? (
              formatter.format(date?.toDate(getLocalTimeZone()))
            ) : (
              <span style={{marginLeft: '4px'}}>Invalid Date</span>
            )}
          </span>
        </p>
        <DatePicker
          label='Date'
          value={date}
          defaultValue={today(getLocalTimeZone())}
          onChange={(date) => {
            setDate(date)
          }}
        />
      </I18nProvider>
    </div>
  )
}

export const Variants = () => {
  return (
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-gray20)'}}>
      <I18nProvider locale='en-SG'>
        <h3>Readonly</h3>
        <DatePicker
          isReadOnly
          label='Date'
          defaultValue={today(getLocalTimeZone())}
        />
        <h3>Disabled</h3>
        <DatePicker
          isDisabled
          label='Date'
          defaultValue={today(getLocalTimeZone())}
        />
        <h3>Invalid</h3>
        <DatePicker
          isInvalid
          label='Date'
          defaultValue={today(getLocalTimeZone())}
          isRequired
          necessityIndicator='icon'
        />
        <h3>MinValue</h3>
        <DatePicker
          label='Date'
          defaultValue={today(getLocalTimeZone()).add({days: 1})}
          minValue={today(getLocalTimeZone()).add({days: 1})}
        />
        <h3>MaxValue</h3>
        <DatePicker
          label='Date'
          defaultValue={today(getLocalTimeZone())}
          maxValue={today(getLocalTimeZone())}
        />
        <h3>Mobile version</h3>
        <DatePicker label='Date' isMobile />
        <h3>Helper texts</h3>
        <DatePicker
          label='Date'
          helperText='Helper text'
          errorMessage='Error message'
          isInvalid
        />
      </I18nProvider>
    </div>
  )
}

export const Custom = () => {
  return (
    <div style={{padding: '1rem', backgroundColor: 'white'}}>
      <DatePicker
        css={{
          '& .cdg-date-field > div': {
            backgroundColor: 'var(--cdg-color-cdgBlue20)',
          },
          '& .date-field-input > div': {
            color: 'var(--cdg-color-cdgBlue100)',
          },
          '& .date-field-input > div:focus-visible': {
            color: 'var(--cdg-color-cdgBlue100)',
            backgroundColor: 'white',
          },
        }}
      />
    </div>
  )
}

const meta = {
  title: 'Example/Date Picker',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
