import {TimePicker} from '@comfortdelgro/react-compass'

function TimePickerIsDisabled() {
  return (
    <div>
      <TimePicker defaultValue={'12:00 PM'} isDisabled />
    </div>
  )
}

export default TimePickerIsDisabled
