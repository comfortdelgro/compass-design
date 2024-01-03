import {TimePicker} from '@comfortdelgro/react-compass'
import {useState} from 'react'

function TimePickerMinTime() {
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
      minTime={'12:00:00'}
    />
  )
}

export default TimePickerMinTime
