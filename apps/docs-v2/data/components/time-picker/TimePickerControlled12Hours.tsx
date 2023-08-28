import TimePicker from '@comfortdelgro/react-compass/time-picker'
import {useState} from 'react'

function Time12HoursPickerControlled() {
  const [value, setValue] = useState('')
  return (
    <TimePicker
      formatTime='hh:mm:ss AA'
      views={['hours12', 'minutes', 'seconds', 'sessions']}
      value={value}
      onTimeChange={(value: string) => {
        console.log('Value 12-hours changed: ', value)
        setValue(value)
      }}
    />
  )
}

export default Time12HoursPickerControlled
