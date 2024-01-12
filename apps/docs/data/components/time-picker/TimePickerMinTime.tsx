import {TimePicker} from '@comfortdelgro/react-compass'
import {useState} from 'react'

function TimePickerMinTime() {
  const [value24H, setValue24H] = useState('08:25 AM')
  return (
    <TimePicker
      formatTime='hh:mm AA'
      views={['hours12', 'minutes', 'sessions']}
      hasFooter
      value={value24H}
      onTimeChange={(value: string) => {
        console.log('Value 24-hours changed: ', value24H)
        setValue24H(value)
      }}
      minTime='07:30 AM'
    />
  )
}

export default TimePickerMinTime
