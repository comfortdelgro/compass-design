import {TimePicker} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export function Time12HoursPickerControlled() {
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

export function Time24HoursPickerControlled() {
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
