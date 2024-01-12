import type {Meta} from '@storybook/react'
import React, {useState} from 'react'
import TimePicker from './index'

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '3rem',
}
const styleRow: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
}

export const Basic: React.FC = () => {
  const [value, setValue] = useState('')
  const [value24H, setValue24H] = useState('')
  const [valueMinTime, setValueMinTime] = useState('08:25 AM')

  return (
    <div style={{...style}}>
      <h3>Default (format: hh:mm AA)</h3>
      <div style={{...styleRow}}>
        <TimePicker
          defaultValue={'12:00 PM'}
          // onFocus={() => console.log('onFocus')}
          // onBlur={() => console.log('onBlur')}
          // onOpenChange={(open) => console.log('onOpenChange: ', open)}
        />
      </div>
      <h3>Disable</h3>
      <div style={{...styleRow}}>
        <TimePicker defaultValue={'12:00 PM'} isDisabled />
      </div>
      <h3>Readonly</h3>
      <div style={{...styleRow}}>
        <TimePicker defaultValue={'12:00 PM'} isReadOnly />
      </div>
      <h3>With 12-hours uncontrolled</h3>
      <div style={{...styleRow}}>
        <TimePicker
          formatTime='hh:mm:ss AA'
          views={['hours12', 'minutes', 'seconds', 'sessions']}
          defaultValue={'11:05:50 PM'}
        />
      </div>
      <h3>With 12-hours controlled</h3>
      <div style={{...styleRow}}>
        <TimePicker
          formatTime='hh:mm:ss AA'
          views={['hours12', 'minutes', 'seconds', 'sessions']}
          value={value}
          onTimeChange={(value: string) => {
            console.log('Value 12-hours changed: ', value)
            setValue(value)
          }}
        />
      </div>
      <h3>With 24-hours uncontrolled</h3>
      <div style={{...styleRow}}>
        <TimePicker
          formatTime='HH:mm:ss'
          views={['hours24', 'minutes', 'seconds']}
          hasFooter
          defaultValue={'05:05:55'}
        />
      </div>
      <h3>With 24-hours controlled</h3>
      <div style={{...styleRow}}>
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
      </div>
      <h3>Disabled dropdown with min times</h3>
      <div style={{...styleRow}}>
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
      </div>
    </div>
  )
}

const meta = {
  title: 'Example/TimePicker ',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
