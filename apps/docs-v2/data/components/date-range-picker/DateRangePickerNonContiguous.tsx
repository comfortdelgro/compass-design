import DateRangePicker from '@comfortdelgro/react-compass/date-range-picker'

function DateRangePickerNonContiguous() {
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
      />
    </div>
  )
}

export default DateRangePickerNonContiguous
