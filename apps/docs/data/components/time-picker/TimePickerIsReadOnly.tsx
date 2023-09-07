import TimePicker from '@comfortdelgro/react-compass/time-picker'

function TimePickerIsReadOnly() {
  return (
    <div>
      <TimePicker defaultValue={'12:00 PM'} isReadOnly />
    </div>
  )
}

export default TimePickerIsReadOnly
