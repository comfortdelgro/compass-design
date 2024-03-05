import {Meta} from '@storybook/react'
import React from 'react'
import Radio from '../radio'
import SpeedDial from '../speed-dial/speed-dial'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

const actions = [
  {
    name: 'Action 1',
    icon: '+',
    onClick: () => console.log('Action 1 clicked'),
  },
  {
    name: 'Action 2',
    icon: '-',
    onClick: () => console.log('Action 2 clicked'),
  },
  // Add more actions as needed
]
export const Positions: React.FC = () => {
  const [position, setPosition] = React.useState<
    'up' | 'down' | 'left' | 'right'
  >('up')
  return (
    <>
      <div style={{...style}}>
        <Radio.Group
          value={position}
          onChange={(position) => {
            setPosition(position as 'up' | 'down' | 'left' | 'right')
          }}
          css={{flexDirection: 'row'}}
        >
          <Radio description='Up' value='up' id='item1' />
          <Radio description='Down' value='down' />
          <Radio description='Left' value='left' />
          <Radio description='Right' value='right' />
        </Radio.Group>
      </div>
      <div style={{position: 'relative', width: '600px', height: '400px'}}>
        <br />
        {/* Render other content */}
        {/* Render the SpeedDial component with the actions prop */}
        <SpeedDial actions={actions} position={position} />
      </div>
    </>
  )
}

const meta = {
  title: 'Example/Speed Dial',
  component: Positions,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Positions>

export default meta
