import Menu from '@comfortdelgro/compass-icons/react/menu'
import Button from '@comfortdelgro/react-compass/button'
import Dropdown from '@comfortdelgro/react-compass/dropdown'
import Popover, {PopoverDirection} from '@comfortdelgro/react-compass/popover'
import {useState} from 'react'

const SampleTopPopover = () => {
  return (
    <div
      className='popover-content'
      style={{
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
  const [direction, setDirection] = useState<PopoverDirection>('bottom-right')
  const [isLeftOpen, setIsLeftOpen] = useState(false)
  const [isRightOpen, setIsRightOpen] = useState(false)

  const openLeftPopover = () => {
    setIsLeftOpen(true)
  }

  const openRightPopover = () => {
    setIsRightOpen(true)
  }

  const selectDirection = (key: any) => {
    setDirection(key as PopoverDirection)
  }

  return (
    <>
      <div style={{width: '300px', padding: '20px'}}>
        <Dropdown.Select
          label='Select direction'
          placeholder='Select direction'
          onSelectionChange={selectDirection}
          selectedKey={direction}
        >
          <Dropdown.Item key='bottom-right'>bottom-right</Dropdown.Item>
          <Dropdown.Item key='bottom-left'>bottom-left</Dropdown.Item>
          <Dropdown.Item key='bottom-center'>bottom-center</Dropdown.Item>
          <Dropdown.Item key='top-right'>top-right</Dropdown.Item>
          <Dropdown.Item key='top-left'>top-left</Dropdown.Item>
          <Dropdown.Item key='top-center'>top-center</Dropdown.Item>
        </Dropdown.Select>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <Popover
          isOpen={isLeftOpen}
          anchor={
            <Button variant='secondary' onPress={openLeftPopover}>
              Open
            </Button>
          }
          direction={direction}
          onClose={() => {
            setIsLeftOpen(false)
          }}
        >
          <SampleTopPopover />
        </Popover>
        <Popover
          isOpen={isRightOpen}
          anchor={
            <Menu onClick={openRightPopover} style={{cursor: 'pointer'}} />
          }
          direction={direction}
          onClose={() => {
            setIsRightOpen(false)
          }}
        >
          <SampleTopPopover />
        </Popover>
      </div>
    </>
  )
}
