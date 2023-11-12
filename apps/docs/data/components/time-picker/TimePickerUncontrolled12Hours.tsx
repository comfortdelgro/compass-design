import TimePicker from '@comfortdelgro/react-compass-old/time-picker'

function TimePickerUncontrolled12Hours() {
  return (
    <div>
      <TimePicker
        formatTime='hh:mm:ss AA'
        views={['hours12', 'minutes', 'seconds', 'sessions']}
        defaultValue={'11:05:50 PM'}
      />
    </div>
  )
}

export default TimePickerUncontrolled12Hours
