import {
  DatePicker,
  DateRangePicker,
  RangeCalendarShorcutItem,
  RangeValue,
} from '@comfortdelgro/react-compass'
import {
  DateValue,
  endOfWeek,
  getLocalTimeZone,
  isWeekend,
  parseDate,
  startOfWeek,
  today,
} from '@internationalized/date'
import {I18nProvider, useDateFormatter, useLocale} from '@react-aria/i18n'
import {useState} from 'react'

export function ControlledDatePickers() {
  const [date, setDate] = useState<DateValue>(
    parseDate(today(getLocalTimeZone()).toString()),
  )

  const formatter = useDateFormatter({dateStyle: 'full'})

  return (
    <I18nProvider locale='en-SG'>
      <p>
        <b>Selected date:</b>
        <span style={{marginLeft: '4px'}}>
          {formatter.format(date.toDate(getLocalTimeZone()))}
        </span>
      </p>
      <DatePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        label='Date'
        value={date}
        defaultValue={today(getLocalTimeZone())}
        onChange={setDate}
      />
    </I18nProvider>
  )
}

export function ValidatedDatePickers() {
  const {locale} = useLocale()

  return (
    <DatePicker
      calendarCSS={{
        '& .calendar-footer button:nth-child(2)': {
          background: 'var(--colors-cdgBlue)',
          color: 'var(--colors-whiteText)',
          borderColor: 'var(--colors-cdgBlue)',
        },
      }}
      label='Date'
      isDateUnavailable={(date) => isWeekend(date, locale)}
    />
  )
}

export function GranularityDateRangePicker(props: any) {
  if (props.type !== 'range')
    return (
      <DatePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        label='Date'
        granularity='second'
      />
    )
  return (
    <DateRangePicker
      calendarCSS={{
        '& .calendar-footer button:nth-child(2)': {
          background: 'var(--colors-cdgBlue)',
          color: 'var(--colors-whiteText)',
          borderColor: 'var(--colors-cdgBlue)',
        },
      }}
      granularity='second'
    />
  )
}

export function LabelingDateRangePicker(props: any) {
  if (props.type !== 'range')
    return (
      <>
        <DatePicker
          calendarCSS={{
            '& .calendar-footer button:nth-child(2)': {
              background: 'var(--colors-cdgBlue)',
              color: 'var(--colors-whiteText)',
              borderColor: 'var(--colors-cdgBlue)',
            },
          }}
          label='Date'
        />
        <DatePicker
          calendarCSS={{
            '& .calendar-footer button:nth-child(2)': {
              background: 'var(--colors-cdgBlue)',
              color: 'var(--colors-whiteText)',
              borderColor: 'var(--colors-cdgBlue)',
            },
          }}
          label='Date'
          isRequired
          necessityIndicator='icon'
        />
        <DatePicker
          calendarCSS={{
            '& .calendar-footer button:nth-child(2)': {
              background: 'var(--colors-cdgBlue)',
              color: 'var(--colors-whiteText)',
              borderColor: 'var(--colors-cdgBlue)',
            },
          }}
          label='Date'
          isRequired
          necessityIndicator='label'
        />
        <DatePicker
          calendarCSS={{
            '& .calendar-footer button:nth-child(2)': {
              background: 'var(--colors-cdgBlue)',
              color: 'var(--colors-whiteText)',
              borderColor: 'var(--colors-cdgBlue)',
            },
          }}
          label='Date'
          necessityIndicator='label'
        />
      </>
    )
  return (
    <>
      <DateRangePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        startDateLabel='Start Date'
        endDateLabel='End Date'
      />
      <DateRangePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        startDateLabel='Start Date'
        endDateLabel='End Date'
        isRequired
        necessityIndicator='icon'
      />
      <DateRangePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        startDateLabel='Start Date'
        endDateLabel='End Date'
        isRequired
        necessityIndicator='label'
      />
      <DateRangePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        startDateLabel='Start Date'
        endDateLabel='End Date'
        necessityIndicator='label'
      />
    </>
  )
}

export function InvalidDateRangePicker(props: any) {
  if (props.type !== 'range')
    return (
      <DatePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        isInvalid
      />
    )
  return (
    <DateRangePicker
      calendarCSS={{
        '& .calendar-footer button:nth-child(2)': {
          background: 'var(--colors-cdgBlue)',
          color: 'var(--colors-whiteText)',
          borderColor: 'var(--colors-cdgBlue)',
        },
      }}
      isInvalid
    />
  )
}

export function ControlledDateRangePicker() {
  const [range, setRange] = useState<RangeValue<DateValue | null> | null>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})

  const onChangeDateRangePicker = (
    value: RangeValue<DateValue | null> | null,
  ) => {
    setRange(value)
  }

  return (
    <I18nProvider locale='en-SG'>
      {range &&
        range.start &&
        range.end &&
        formatter.formatRange(
          range.start.toDate(getLocalTimeZone()),
          range.end.toDate(getLocalTimeZone()),
        )}
      <DateRangePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        value={range}
        onChange={onChangeDateRangePicker}
      />
    </I18nProvider>
  )
}

export function ShorcutsDateRangePicker() {
  return (
    <DateRangePicker
      calendarCSS={{
        '& .calendar-footer button:nth-child(2)': {
          background: 'var(--colors-cdgBlue)',
          color: 'var(--colors-whiteText)',
          borderColor: 'var(--colors-cdgBlue)',
        },
      }}
      hasShortcuts
    />
  )
}

export function CustomDateRangePicker(props: any) {
  if (props.type !== 'range')
    return (
      <DatePicker
        label='Date'
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
      />
    )
  return (
    <DateRangePicker
      startDateLabel='Start Date'
      endDateLabel='End Date'
      calendarCSS={{
        '& .calendar-footer button:nth-child(2)': {
          background: 'var(--colors-cdgBlue)',
          color: 'var(--colors-whiteText)',
          borderColor: 'var(--colors-cdgBlue)',
        },
      }}
    />
  )
}

export function ValidatedDateRangePickers({
  contiguous = false,
}: {
  contiguous?: boolean
}) {
  const {locale} = useLocale()

  return (
    <I18nProvider locale='en-SG'>
      <DateRangePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        allowsNonContiguousRanges={contiguous}
        isDateUnavailable={(date) => {
          if (!date) {
            return true
          } else {
            return isWeekend(date, locale)
          }
        }}
      />
    </I18nProvider>
  )
}

export function DateRangePickerWithShortcuts() {
  const {locale} = useLocale()

  const dayOfTwoWeeksAgo = today(getLocalTimeZone()).subtract({
    weeks: 2,
  })
  const startOfTwoWeeksAgo = startOfWeek(dayOfTwoWeeksAgo, locale)
  const endOfTwoWeeksAgo = endOfWeek(dayOfTwoWeeksAgo, locale)

  return (
    <DateRangePicker
      calendarCSS={{
        '& .calendar-footer button:nth-child(2)': {
          background: 'var(--colors-cdgBlue)',
          color: 'var(--colors-whiteText)',
          borderColor: 'var(--colors-cdgBlue)',
        },
      }}
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
    />
  )
}
