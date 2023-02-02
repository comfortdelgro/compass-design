import React, {useState} from 'react'
import Button from '../button'
import Popover from './popover'

const SamplePopover = () => {
  return (
    <div
      className='popover-content'
      style={{
        marginTop: '10px',
        padding: '10px',
        background: '#ffffff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        borderRadius: '5px',
        width: '300px',
        height: '200px',
      }}
    >
      Popover content here
    </div>
  )
}

const SampleTopPopover = () => {
  return (
    <div
      className='popover-content'
      style={{
        marginBottom: '10px',
        padding: '10px',
        background: '#ffffff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        borderRadius: '5px',
        width: '300px',
        height: '200px',
      }}
    >
      Popover content here
    </div>
  )
}

export const PopoverDefault = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openPopover = () => {
    setIsOpen(true)
  }

  return (
    <Popover
      isOpen={isOpen}
      anchor={
        <Button variant='primary' onPress={openPopover}>
          Open
        </Button>
      }
      onClose={() => {
        setIsOpen(false)
      }}
    >
      <SamplePopover />
    </Popover>
  )
}

export const PopoverBottomLeft = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openPopover = () => {
    setIsOpen(true)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <Popover
        isOpen={isOpen}
        anchor={
          <Button variant='primary' onPress={openPopover}>
            Open
          </Button>
        }
        direction='bottom-left'
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <SamplePopover />
      </Popover>
    </div>
  )
}

export const PopoverTopRight = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openPopover = () => {
    setIsOpen(true)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        height: '600px',
      }}
    >
      <Popover
        isOpen={isOpen}
        anchor={
          <Button variant='primary' onPress={openPopover}>
            Open
          </Button>
        }
        direction='top-right'
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <SampleTopPopover />
      </Popover>
    </div>
  )
}

export const PopoverTopLeft = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openPopover = () => {
    setIsOpen(true)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: '600px',
      }}
    >
      <Popover
        isOpen={isOpen}
        anchor={
          <Button variant='primary' onPress={openPopover}>
            Open
          </Button>
        }
        direction='top-left'
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <SampleTopPopover />
      </Popover>
    </div>
  )
}
