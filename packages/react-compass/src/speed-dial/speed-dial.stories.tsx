import React from 'react'
import Radio from '../radio'
import SpeedDial from '../speed-dial/speed-dial'
import {Row} from '../utils'

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
      <Row>
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
      </Row>
      <div style={{position: 'relative', width: '600px', height: '400px'}}>
        <br />
        {/* Render other content */}
        {/* Render the SpeedDial component with the actions prop */}
        <SpeedDial actions={actions} position={position} />
      </div>
    </>
  )
}
