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

export const Popovers = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)

  const openPopover1 = () => {
    setIsOpen1(true)
  }

  const openPopover2 = () => {
    setIsOpen2(true)
  }

  const openPopover3 = () => {
    setIsOpen3(true)
  }

  const openPopover4 = () => {
    setIsOpen4(true)
  }

  const openPopover5 = () => {
    setIsOpen5(true)
  }

  const openPopover6 = () => {
    setIsOpen6(true)
  }

  return (
    <>
      <div className='popover-sample'>
        <Popover
          isOpen={isOpen1}
          anchor={
            <Button variant='primary' onPress={openPopover1}>
              Open
            </Button>
          }
          onClose={() => {
            setIsOpen1(false)
          }}
        >
          <SamplePopover />
        </Popover>
        <Popover
          isOpen={isOpen5}
          anchor={
            <Button variant='primary' onPress={openPopover5}>
              Bottom center
            </Button>
          }
          direction='bottom-center'
          onClose={() => {
            setIsOpen5(false)
          }}
          style={{marginLeft: '120px'}}
        >
          <SamplePopover />
        </Popover>
      </div>

      <div
        className='popover-sample'
        style={{display: 'flex', justifyContent: 'flex-end'}}
      >
        <Popover
          isOpen={isOpen2}
          anchor={
            <Button variant='primary' onPress={openPopover2}>
              Open
            </Button>
          }
          direction='bottom-left'
          onClose={() => {
            setIsOpen2(false)
          }}
        >
          <SamplePopover />
        </Popover>
      </div>

      <div
        className='popover-sample'
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          height: '300px',
        }}
      >
        <Popover
          isOpen={isOpen3}
          anchor={
            <Button variant='primary' onPress={openPopover3}>
              Open
            </Button>
          }
          direction='top-right'
          onClose={() => {
            setIsOpen3(false)
          }}
        >
          <SampleTopPopover />
        </Popover>
        <Popover
          isOpen={isOpen6}
          anchor={
            <Button variant='primary' onPress={openPopover6}>
              Top center
            </Button>
          }
          direction='top-center'
          onClose={() => {
            setIsOpen6(false)
          }}
          style={{marginLeft: '120px'}}
        >
          <SampleTopPopover />
        </Popover>
      </div>

      <div
        className='popover-sample'
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          height: '200px',
        }}
      >
        <Popover
          isOpen={isOpen4}
          anchor={
            <Button variant='primary' onPress={openPopover4}>
              Open
            </Button>
          }
          direction='top-left'
          onClose={() => {
            setIsOpen4(false)
          }}
        >
          <SampleTopPopover />
        </Popover>
      </div>
    </>
  )
}
