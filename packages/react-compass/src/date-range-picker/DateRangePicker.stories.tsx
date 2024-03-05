import {Meta} from '@storybook/react'
import React, {useState} from 'react'
import {Button, CalendarProps, RangeCalendarShorcutItem, RangeValue} from '..'
import {
  DateValue,
  getLocalTimeZone,
  parseDate,
  today,
} from '../internationalized/date'
import {I18nProvider, useDateFormatter} from '../internationalized/i18n'
import DateRangePicker from './date-range-picker'

export const Basic = () => {
  const [range, setRange] = React.useState<RangeValue<CalendarProps | null>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})

  return (
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-gray20)'}}>
      <I18nProvider locale='en-SG'>
        <h3>Controlled</h3>
        <p>
          {range.start && range.end
            ? formatter.formatRange(
                range.start.toDate(getLocalTimeZone()),
                range.end.toDate(getLocalTimeZone()),
              )
            : `${
                range.start &&
                formatter.format(range.start.toDate(getLocalTimeZone()))
              } - ${
                range.end &&
                formatter.format(range.end.toDate(getLocalTimeZone()))
              }`}
        </p>
        <DateRangePicker
          value={range}
          shouldCloseOnSelect
          startDateLabel='Start Date'
          endDateLabel='End Date'
          onChange={(e) => setRange(e as RangeValue<DateValue>)}
        />
      </I18nProvider>
    </div>
  )
}

export const Variants = () => {
  return (
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-gray20)'}}>
      <I18nProvider locale='en-SG'>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h3>Basic</h3>
          <DateRangePicker
            startDateLabel='Start date'
            endDateLabel='End date'
          />
          <br />
          <h3>Disabled</h3>
          <DateRangePicker
            isDisabled
            startDateLabel='Start date'
            endDateLabel='End date'
          />
          <h3>Read only</h3>
          <DateRangePicker
            isReadOnly
            startDateLabel='Start date'
            endDateLabel='End date'
          />
          <h3>Invalid</h3>
          <DateRangePicker
            isInvalid
            startDateLabel='Start date'
            endDateLabel='End date'
          />
          <h3>Min & Max</h3>
          <DateRangePicker
            startDateLabel='Start date'
            endDateLabel='End date'
            minValue={today(getLocalTimeZone()).add({days: 1})}
            maxValue={today(getLocalTimeZone()).add({days: 7})}
          />
          <h3>Max range on first chosen date</h3>
          <MaxDateFirstChosenRangePicker />
          <h3>Is Mobile</h3>
          <DateRangePicker
            startDateLabel='Start date'
            endDateLabel='End date'
            isMobile
          />
          <h3>Helper texts</h3>
          <DateRangePicker
            isInvalid
            isRequired
            helperText='Weekend is excluded'
            errorMessage='Must not include weekend'
            startDateLabel='Start date'
            endDateLabel='End date'
          />
          <h3>Shortcuts</h3>
          <DateRangePicker
            startDateLabel='Start date'
            endDateLabel='End date'
            hasShortcuts
          />
          <h3>Custom Shortcuts Range Calendar</h3>
          <DateRangePicker
            startDateLabel='Start date'
            endDateLabel='End date'
            hasShortcuts
            customShortcuts={(shortcuts) => {
              const customShortcuts: RangeCalendarShorcutItem[] = [
                {
                  label: 'Custom Shortcut',
                  getValue: () => {
                    return {start: null, end: null}
                  },
                },
              ]
              return [...shortcuts, ...customShortcuts]
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
      </I18nProvider>
    </div>
  )
}

const MaxDateFirstChosenRangePicker = () => {
  const [value, setValue] = useState<RangeValue<DateValue | null> | null>(null)
  const [maxValue, setMaxValue] = useState<DateValue | null>(null)

  const onChange = (value: RangeValue<DateValue | null> | null) => {
    setValue(value)
    if (value && value.start && !value.end && 30) {
      setMaxValue(value.start.subtract({days: -30}))
    }
  }

  return (
    <DateRangePicker
      value={value}
      onChange={onChange}
      shouldCloseOnSelect
      shouldOnChangeTriggerOnSameDate
      maxValue={maxValue}
      onOpenChange={(isOpen) => {
        if (value?.start && !value.end) {
          return
        }
        if (isOpen) {
          setMaxValue(null)
        }
      }}
    />
  )
}

export const Custom = () => {
  return (
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-gray20)'}}>
      <DateRangePicker
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
  title: 'Example/Date Range Picker',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
