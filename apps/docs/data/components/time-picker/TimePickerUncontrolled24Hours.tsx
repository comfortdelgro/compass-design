import {TimePicker} from '@comfortdelgro/react-compass'

function Time24HoursPickerUncontrolled() {
  return (
    <TimePicker
      formatTime='HH:mm:ss'
      views={['hours24', 'minutes', 'seconds']}
      hasFooter
      defaultValue={'05:05:55'}
    />
  )
}

export default Time24HoursPickerUncontrolled
