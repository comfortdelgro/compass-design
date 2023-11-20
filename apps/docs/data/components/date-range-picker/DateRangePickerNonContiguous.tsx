import {DateRangePicker, isWeekend, useLocale} from '@comfortdelgro/react-compass'

function DateRangePickerNonContiguous() {
  const {locale} = useLocale()

  return (
    <div>
      <DateRangePicker
        calendarCSS={{
          '& .calendar-footer button:nth-child(2)': {
            background: 'var(--colors-cdgBlue)',
            color: 'var(--colors-whiteText)',
            borderColor: 'var(--colors-cdgBlue)',
          },
        }}
        allowsNonContiguousRanges
        isDateUnavailable={(date) => {
          if (!date) {
            return true
          } else {
            return isWeekend(date, locale)
          }
        }}
      />
    </div>
  )
}

export default DateRangePickerNonContiguous
