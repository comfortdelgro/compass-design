import DatePicker from '@comfortdelgro/react-compass/date-picker'

function DatePickerLabeling() {
  return (
    <div>
      <DatePicker label='Date' />
      <br />
      <DatePicker label='Date' isRequired necessityIndicator='icon' />
      <br />
      <DatePicker label='Date' isRequired necessityIndicator='label' />
      <br />
      <DatePicker label='Date' necessityIndicator='label' />
    </div>
  )
}

export default DatePickerLabeling
