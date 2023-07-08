import React, {useState} from 'react'
import Popover, {PopoverDirection} from '.'
import Button from '../button'

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

export const Controlled = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [currentDirection, setCurrentDirection] =
    useState<PopoverDirection>('bottom')

  const openPopover1 = () => {
    setIsOpen1(true)
  }

  return (
    <>
      <select
        onChange={(e) => {
          setCurrentDirection(e.target.value as PopoverDirection)
        }}
      >
        {directions.map((direction) => {
          return (
            <option key={direction} value={direction}>
              {direction}
            </option>
          )
        })}
      </select>

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
            <Button variant='primary' onPress={openPopover1}>
              Triger
            </Button>
          }
          direction={currentDirection}
          onClose={() => {
            setIsOpen1(false)
          }}
        >
          <SamplePopover />
        </Popover>
      </div>
    </>
  )
}
