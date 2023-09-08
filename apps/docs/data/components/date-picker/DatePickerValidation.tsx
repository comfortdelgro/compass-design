import {isWeekend, useLocale} from '@comfortdelgro/react-compass'
import DatePicker from '@comfortdelgro/react-compass/date-picker'

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
