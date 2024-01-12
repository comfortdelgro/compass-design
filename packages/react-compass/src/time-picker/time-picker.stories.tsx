import React, {useState} from 'react'
import {Column, Row} from '../utils/components'
import TimePicker from './index'

export const Default: React.FC = () => {
  const [value, setValue] = useState('')
  const [value24H, setValue24H] = useState('')
  const [valueMinTime, setValueMinTime] = useState('08:25 AM')

  return (
    <>
      <Column>
        <h3>Default (format: hh:mm AA)</h3>
        <Row>
          <TimePicker
            defaultValue={'12:00 PM'}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onOpenChange={(open) => console.log('onOpenChange: ', open)}
          />
        </Row>
        <h3>Disable</h3>
        <Row>
          <TimePicker defaultValue={'12:00 PM'} isDisabled />
        </Row>
        <h3>Readonly</h3>
        <Row>
          <TimePicker defaultValue={'12:00 PM'} isReadOnly />
        </Row>
        <h3>With 12-hours uncontrolled</h3>
        <Row>
          <TimePicker
            formatTime='hh:mm:ss AA'
            views={['hours12', 'minutes', 'seconds', 'sessions']}
            defaultValue={'11:05:50 PM'}
          />
        </Row>
        <h3>With 12-hours controlled</h3>
        <Row>
          <TimePicker
            formatTime='hh:mm:ss AA'
            views={['hours12', 'minutes', 'seconds', 'sessions']}
            value={value}
            onTimeChange={(value: string) => {
              console.log('Value 12-hours changed: ', value)
              setValue(value)
            }}
          />
        </Row>
        <h3>With 24-hours uncontrolled</h3>
        <Row>
          <TimePicker
            formatTime='HH:mm:ss'
            views={['hours24', 'minutes', 'seconds']}
            hasFooter
            defaultValue={'05:05:55'}
          />
        </Row>
        <h3>With 24-hours controlled</h3>
        <Row>
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
        </Row>
        <h3>Disabled dropdown with min times</h3>
        <Row>
          <TimePicker
            formatTime='hh:mm AA'
            views={['hours12', 'minutes', 'sessions']}
            hasFooter
            value={valueMinTime}
            onTimeChange={(value: string) => {
              console.log('Value 24-hours changed: ', value)
              setValueMinTime(value)
            }}
            minTime='07:30 AM'
          />
        </Row>
      </Column>
    </>
  )
}
