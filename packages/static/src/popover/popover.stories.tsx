import type { Meta } from '@storybook/react'
import React, { useState } from 'react'
import Popover, { PopoverDirection } from './index'

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
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

const SamplePopover = () => {
  return (
    <div
      className='popover-content'
      style={{
        background: '#ffffff',
        border: '1px solid #b63f3f',
        borderRadius: '5px',
        width: '100px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Content
    </div>
  )
}

const directions: PopoverDirection[] = [
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

export const Basic: React.FC = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [currentDirection, setCurrentDirection] =
    useState<PopoverDirection>('bottom')

  const [currentOffset, setCurrentOffset] = useState(10)

  const openPopover1 = () => {
    setIsOpen1(true)
  }

  return (
    <div style={{ ...style }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
          }}
        >
          <label
            style={{ fontSize: '0.85em', color: 'red' }}
            htmlFor='directionSelect'
          >
            Direction
          </label>
          <select
            id='directionSelect'
            onChange={(e) => {
              setCurrentDirection(e.target.value as PopoverDirection)
            }}
            style={{ width: '6rem', height: '1.8rem' }}
          >
            {directions.map((direction) => {
              return (
                <option key={direction} value={direction}>
                  {direction}
                </option>
              )
            })}
          </select>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
          }}
        >
          <label
            style={{ fontSize: '0.85em', color: 'red' }}
            htmlFor='offsetInput'
          >
            Offset
          </label>
          <input
            id='offsetInput'
            style={{ width: '6rem', height: '1.8rem' }}
            type='number'
            value={currentOffset}
            onChange={(e) => setCurrentOffset(Number(e.target.value))}
          />
        </div>
      </div>

      <div
        style={{
          width: '50rem',
          height: '30rem',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '10rem 10rem',
          marginTop: '0.5rem',
        }}
      >
        <Popover
          isOpen={isOpen1}
          anchor={
            <button onClick={openPopover1}>
              Click me!
            </button>
          }
          offset={currentOffset}
          direction={currentDirection}
          onClose={() => {
            setIsOpen1(false)
          }}
        >
          <SamplePopover />
        </Popover>
      </div>
    </div>
  )
}

const meta = {
  title: 'Example/Popover Server',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
