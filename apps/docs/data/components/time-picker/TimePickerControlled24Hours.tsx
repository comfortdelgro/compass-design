import TimePicker from '@comfortdelgro/react-compass/time-picker'
import {useState} from 'react'

function Time12HoursPickerControlled() {
  const [value24H, setValue24H] = useState('')
  return (
    <TimePicker
      formatTime='HH:mm:ss'
      views={['hours24', 'minutes', 'seconds']}
      hasFooter
      value={value24H}
      onTimeChange={(value: string) => {
        console.log('Value 24-hours changed: ', value24H)
        setValue24H(value)
      }}
    />
  )
}

export default Time12HoursPickerControlled
