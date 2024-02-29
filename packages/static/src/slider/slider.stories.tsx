import {Meta} from '@storybook/react'
import React, {CSSProperties} from 'react'
import {Slider} from '..'

const styles: CSSProperties = {
  gap: 32,
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
}

export const UnControlled: React.FC = () => {
  return (
    <div style={styles}>
      <Slider defaultValue={25} tooltip={false} />
      <Slider.Range defaultValue={{start: 12, end: 36}} />
    </div>
  )
}

export const Controlled: React.FC = () => {
  const [value, setValue] = React.useState(25)
  const [value2, setValue2] = React.useState({start: 12, end: 36})
  return (
    <div style={styles}>
      <Slider value={value} onChange={setValue} />
      <Slider.Range value={value2} onChange={setValue2} />
    </div>
  )
}

export const Orientation: React.FC = () => {
  return (
    <div style={{...styles, flexDirection: 'row'}}>
      <div style={{height: 300, width: 30}}>
        <Slider defaultValue={25} orientation='vertical' />
      </div>
      <div style={{height: 300, width: 30}}>
        <Slider.Range
          defaultValue={{start: 12, end: 36}}
          orientation='vertical'
        />
      </div>
    </div>
  )
}

export const Disabled: React.FC = () => {
  return (
    <div style={styles}>
      <Slider defaultValue={25} isDisabled />
      <Slider.Range defaultValue={{start: 12, end: 36}} isDisabled />
    </div>
  )
}

const meta = {
  title: 'Slider',
  component: UnControlled,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UnControlled>

export default meta
