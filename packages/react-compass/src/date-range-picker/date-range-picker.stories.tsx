import type {RangeValue} from '@react-types/shared'
import React, {useState} from 'react'
import Button from '../button'
import {DateValue} from '../calendar/types'
import {today} from '../internationalized/date'
import {RangeCalendarShorcutItem} from '../range-calendar/range-calendar-shortcuts'
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
      </Column>
    </I18nProvider>
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
        if (isOpen) {
          setMaxValue(null)
        }
      }}
    />
  )
}

export const Controlled: React.FC = () => {
  const [range, setRange] = React.useState<RangeValue<CalendarProps | null>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})

  return (
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
  )
}

export const Default: React.FC = () => {
  return <DateRangePicker />
}
