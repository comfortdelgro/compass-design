import {isWeekend, useLocale, DateRangePicker} from '@comfortdelgro/react-compass'

function DateRangePickerValidation() {
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

export default DateRangePickerValidation
