import {TimePicker} from '@comfortdelgro/react-compass'

function TimePickerIsReadOnly() {
  return (
    <div>
      <TimePicker defaultValue={'12:00 PM'} isReadOnly />
    </div>
  )
}

export default TimePickerIsReadOnly
