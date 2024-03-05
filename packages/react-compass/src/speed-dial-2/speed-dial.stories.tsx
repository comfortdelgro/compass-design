import {faBagShopping, faPlus} from '@fortawesome/free-solid-svg-icons'
import {faChair} from '@fortawesome/free-solid-svg-icons/faChair'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Meta} from '@storybook/react'
import React, {useState} from 'react'
import SpeedDial2 from '.'
import {Checkbox} from '..'
import Radio from '../radio'

export const Positions: React.FC = () => {
  const [position, setPosition] = React.useState<
    'up' | 'down' | 'left' | 'right'
  >('up')
  const [showing, setShowing] = useState(false)
  const [useHover, setUseHover] = useState(true)
  const [floatPosition, setFloatPosition] = useState(false)

  const toggleSpeedDial = () => {
    setShowing(!showing)
  }
  return (
    <div style={{padding: '10px'}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          padding: '3rem',
          boxSizing: 'border-box',
        }}
      >
        <div>
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
        <div>
          <Checkbox
            isSelected={useHover}
            onChange={(event) => {
              setUseHover(event)
            }}
          >
            Use hover event
          </Checkbox>
          <Checkbox
            isSelected={floatPosition}
            onChange={(event) => {
              setFloatPosition(event)
            }}
          >
            Float on bottom right
          </Checkbox>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px dashed #ccc',
        }}
      >
        <SpeedDial2
          showing={showing}
          actions={
            <SpeedDial2.Actions position={position}>
              <SpeedDial2.Button>
                <FontAwesomeIcon icon={faBagShopping} />
              </SpeedDial2.Button>
              <SpeedDial2.Button>
                <FontAwesomeIcon icon={faChair} />
              </SpeedDial2.Button>
            </SpeedDial2.Actions>
          }
          style={
            floatPosition && {
              position: 'absolute',
              right: '20px',
              bottom: '20px',
            }
          }
          onMouseLeave={() => {
            if (!useHover) {
              return
            }
            setShowing(false)
          }}
        >
          <SpeedDial2.Button
            onClick={() => toggleSpeedDial()}
            onMouseEnter={() => {
              if (!useHover) {
                return
              }
              setShowing(true)
            }}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                ...(showing && {transform: 'rotate(45deg)'}),
                ...{transition: 'all 0.2s'},
              }}
            />
          </SpeedDial2.Button>
        </SpeedDial2>
      </div>
    </div>
  )
}

const meta = {
  title: 'Example/Speed Dial 2',
  component: Positions,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Positions>

export default meta
