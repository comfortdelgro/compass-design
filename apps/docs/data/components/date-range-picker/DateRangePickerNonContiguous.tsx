import {DateRangePicker, isWeekend, useLocale} from '@comfortdelgro/react-compass'

function DateRangePickerNonContiguous() {
  const {locale} = useLocale()

  return (
    <div>
      <DateRangePicker
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
