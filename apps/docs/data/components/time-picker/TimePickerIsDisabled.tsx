import TimePicker from '@comfortdelgro/react-compass/time-picker'

function TimePickerIsDisabled() {
  return (
    <div>
      <TimePicker defaultValue={'12:00 PM'} isDisabled />
    </div>
  )
}

export default TimePickerIsDisabled