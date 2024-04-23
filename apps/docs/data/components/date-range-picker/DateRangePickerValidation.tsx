import {
  DateRangePicker,
  isWeekend,
  useLocale,
} from '@comfortdelgro/react-compass'

function DateRangePickerValidation() {
  const {locale} = useLocale()
  return (
    <div>
      <DateRangePicker
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
