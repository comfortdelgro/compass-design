import DateRangePicker from '@comfortdelgro/react-compass/date-range-picker'

function DateRangePickerLabeling() {
  return (
    <div>
      <DateRangePicker startDateLabel='Start Date' />
      <br />
      <DateRangePicker
        startDateLabel='Start Date'
        endDateLabel='End Date'
        isRequired
        necessityIndicator='icon'
      />

      <br />
      <DateRangePicker
        startDateLabel='Start Date'
        endDateLabel='End Date'
        isRequired
        necessityIndicator='label'
      />
      <br />
      <DateRangePicker
        startDateLabel='Start Date'
        endDateLabel='End Date'
        necessityIndicator='label'
      />
    </div>
  )
}

export default DateRangePickerLabeling
