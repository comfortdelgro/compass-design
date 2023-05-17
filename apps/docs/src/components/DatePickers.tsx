import {
  DatePicker,
  DateRangePicker,
  RangeValue,
} from '@comfortdelgro/react-compass'
import {
  DateValue,
  getLocalTimeZone,
  isWeekend,
  parseDate,
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
      {/* @ts-ignore */}
      <DatePicker
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
    // @ts-ignore
    <DatePicker
      label='Date'
      isDateUnavailable={(date) => isWeekend(date, locale)}
    />
  )
}

export function ControlledDateRangePicker() {
  const [range, setRange] = useState<RangeValue<DateValue>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08'),
  })
  const formatter = useDateFormatter({dateStyle: 'long'})
  return (
    <I18nProvider locale='en-SG'>
      {range &&
        formatter.formatRange(
          range.start.toDate(getLocalTimeZone()),
          range.end.toDate(getLocalTimeZone()),
        )}
        {/* @ts-ignore */}
      <DateRangePicker value={range} onChange={setRange} />
    </I18nProvider>
  )
}

export function ValidatedDateRangePickers({
  contiguos = false,
}: {
  contiguos?: boolean
}) {
  const {locale} = useLocale()

  return (
    <I18nProvider locale='en-SG'>
      {/* @ts-ignore */}
      <DateRangePicker
        allowsNonContiguousRanges={contiguos}
        isDateUnavailable={(date) => isWeekend(date, locale)}
      />
    </I18nProvider>
  )
}
