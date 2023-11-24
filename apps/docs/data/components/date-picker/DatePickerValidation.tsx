import {isWeekend, useLocale} from '@comfortdelgro/react-compass-old'
import DatePicker from '@comfortdelgro/react-compass-old/date-picker'

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
