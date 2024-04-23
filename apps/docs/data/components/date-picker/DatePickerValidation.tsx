import {DatePicker, isWeekend, useLocale} from '@comfortdelgro/react-compass'

function DatePickerValidation() {
  const {locale} = useLocale()
  return (
    <div>
      <DatePicker
        label='Date'
        isDateUnavailable={(date) => isWeekend(date, locale)}
      />
    </div>
  )
}

export default DatePickerValidation
