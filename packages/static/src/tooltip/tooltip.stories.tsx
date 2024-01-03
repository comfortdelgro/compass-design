import {Meta} from '@storybook/react'
import React, {useState} from 'react'
import Button from '../button'
import {Placement} from './index'
import Tooltip from './tooltip'
import TooltipTrigger from './tooltip-trigger'

export const Controlled: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSimple, setIsOpenSimple] = useState(false)

  return (
    <div style={{marginLeft: '1.5rem'}}>
      <h3>Tooltip State: {isOpen ? 'opened' : 'closed'}</h3>
      <TooltipTrigger
        isOpen={isOpen}
        onOpenChange={(isOpen) => {
          setIsOpen(isOpen)
        }}
      >
        <Button>Trigger</Button>
        <Tooltip title='Title' dismissible css={{backgroundColor: '#0142AF'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          quam ullam amet est rerum in enim doloribus laborum beatae veniam
          corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
          Tempora, sit?
        </Tooltip>
      </TooltipTrigger>

      <h3>Simple Tooltip State: {isOpenSimple ? 'opened' : 'closed'}</h3>
      <TooltipTrigger
        isOpen={isOpenSimple}
        onOpenChange={(isOpenSimple) => {
          setIsOpenSimple(isOpenSimple)
        }}
      >
        <Button>Trigger</Button>
        <Tooltip>This is simple tooltip</Tooltip>
      </TooltipTrigger>
    </div>
  )
}

export const Placements: React.FC = () => {
  const placements: Placement[] = [
    'bottom',
    'bottom-end',
    'bottom-start',
    'left',
    'left-end',
    'left-start',
    'right',
    'right-end',
    'right-start',
    'top',
    'top-end',
    'top-start',
  ]
  const [currentPlacement, setCurrentPlacement] = useState<Placement>('bottom')

  return (
    <div style={{marginLeft: '1.5rem'}}>
      <h3>Select direction for testing</h3>
      <select
        onChange={(e) => {
          setCurrentPlacement(e.target.value as Placement)
        }}
      >
        {placements.map((placement) => {
          return (
            <option key={placement} value={placement}>
              {placement}
            </option>
          )
        })}
      </select>
      <div
        style={{
          height: '50%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TooltipTrigger placement={currentPlacement} isOpen={true}>
          <Button>Bottom</Button>
          <Tooltip title='Title' dismissible>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            quam ullam amet est rerum in enim doloribus laborum beatae veniam
            corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
            Tempora, sit?
          </Tooltip>
        </TooltipTrigger>
      </div>
    </div>
  )
}

export const Offset: React.FC = () => {
  const [crossAxis, setCrossAxis] = useState(0)
  const [mainAxis, setMainAxis] = useState(0)

  return (
    <div style={{marginLeft: '1.5rem'}}>
      <h3>Offset</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          gap: '12px',
          marginBottom: '24px',
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label htmlFor='cross-axis'>Cross Axis</label>
          <input
            id='cross-axis'
            type='number'
            placeholder='Cross Axis'
            defaultValue={0}
            onChange={(e) => {
              setCrossAxis(parseInt(e.target.value))
            }}
          ></input>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label htmlFor='main-axis'>Main Axis</label>
          <input
            id='main-axis'
            type='number'
            placeholder='Main Axis'
            defaultValue={0}
            onChange={(e) => {
              setMainAxis(parseInt(e.target.value))
            }}
          ></input>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TooltipTrigger
          offset={{crossAxis: crossAxis, mainAxis: mainAxis}}
          isOpen={true}
        >
          <Button>Trigger</Button>
          <Tooltip title='Title' dismissible>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            quam ullam amet est rerum in enim doloribus laborum beatae veniam
            corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
            Tempora, sit?
          </Tooltip>
        </TooltipTrigger>
      </div>
    </div>
  )
}

export const Delay: React.FC = () => {
  const [delayTime, setDelayTime] = useState(0)
  return (
    <div style={{marginLeft: '1.5rem'}}>
      <h3>Delay</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          gap: '12px',
          marginBottom: '24px',
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label htmlFor='delay-time'>Delay Time (Ms)</label>
          <input
            id='delay-time'
            type='number'
            placeholder='Cross Axis'
            defaultValue={0}
            onChange={(e) => {
              setDelayTime(parseInt(e.target.value))
            }}
          ></input>
        </div>
      </div>
      <TooltipTrigger delay={delayTime}>
        <Button>Trigger</Button>
        <Tooltip title='Title' dismissible>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          quam ullam amet est rerum in enim doloribus laborum beatae veniam
          corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
          Tempora, sit?
        </Tooltip>
      </TooltipTrigger>
    </div>
  )
}

const meta = {
  title: 'Example/Tooltip ',
  component: Controlled,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Controlled>

export default meta
