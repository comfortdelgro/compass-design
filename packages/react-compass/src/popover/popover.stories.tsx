import React, {useState} from 'react'
import Button from '../button'
import {useIsDarkTheme} from '../theme'
import {useDOMRef} from '../utils/use-dom-ref'
import Popover from './popover'

const SamplePopover = () => {
  const isDarkTheme = useIsDarkTheme()
  return (
    <div
      className='popover-content'
      style={{
        padding: '10px',
        background: `${isDarkTheme ? '#424657' : '#ffffff'}`,
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

export const Variants = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)
  const [isOpen7, setIsOpen7] = useState(false)
  const [isOpen8, setIsOpen8] = useState(false)
  const [isOpen9, setIsOpen9] = useState(false)
  const [isOpen10, setIsOpen10] = useState(false)
  const [isOpen11, setIsOpen11] = useState(false)
  const [isOpen12, setIsOpen12] = useState(false)

  const ref = useDOMRef<HTMLDivElement>()

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

  const openPopover7 = () => {
    setIsOpen7(true)
  }

  const openPopover8 = () => {
    setIsOpen8(true)
  }

  const openPopover9 = () => {
    setIsOpen9(true)
  }

  const openPopover10 = () => {
    setIsOpen10(true)
  }

  const openPopover11 = () => {
    setIsOpen11(true)
  }

  const openPopover12 = () => {
    setIsOpen12(true)
  }

  return (
    <>
      <div className='popover-sample' ref={ref}>
        <Popover
          isOpen={isOpen1}
          anchor={
            <Button variant='primary' onPress={openPopover1}>
              Bottom left
            </Button>
          }
          attachToElement={ref.current && ref.current.parentElement}
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
          attachToElement={ref.current && ref.current.parentElement}
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
              Bottom right
            </Button>
          }
          direction='bottom-right'
          attachToElement={ref.current && ref.current.parentElement}
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
          height: '600px',
        }}
      >
        <Popover
          isOpen={isOpen3}
          anchor={
            <Button variant='primary' onPress={openPopover3}>
              Top left
            </Button>
          }
          direction='top-left'
          attachToElement={ref.current && ref.current.parentElement}
          onClose={() => {
            setIsOpen3(false)
          }}
        >
          <SamplePopover />
        </Popover>

        <Popover
          isOpen={isOpen6}
          anchor={
            <Button variant='primary' onPress={openPopover6}>
              Top center
            </Button>
          }
          direction='top-center'
          attachToElement={ref.current && ref.current.parentElement}
          onClose={() => {
            setIsOpen6(false)
          }}
          style={{marginLeft: '120px'}}
        >
          <SamplePopover />
        </Popover>

        <Popover
          isOpen={isOpen4}
          anchor={
            <Button variant='primary' onPress={openPopover4}>
              Top right
            </Button>
          }
          direction='top-right'
          attachToElement={ref.current && ref.current.parentElement}
          onClose={() => {
            setIsOpen4(false)
          }}
          style={{marginLeft: '120px'}}
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
          height: '600px',
        }}
      >
        <Popover
          isOpen={isOpen7}
          anchor={
            <Button variant='primary' onPress={openPopover7}>
              Bottom left
            </Button>
          }
          direction='bottom-left'
          attachToElement={ref.current && ref.current.parentElement}
          onClose={() => {
            setIsOpen7(false)
          }}
        >
          <SamplePopover />
        </Popover>

        <Popover
          isOpen={isOpen8}
          anchor={
            <Button variant='primary' onPress={openPopover8}>
              Bottom center
            </Button>
          }
          direction='bottom-center'
          attachToElement={ref.current && ref.current.parentElement}
          onClose={() => {
            setIsOpen8(false)
          }}
          style={{marginLeft: '120px'}}
        >
          <SamplePopover />
        </Popover>

        <Popover
          isOpen={isOpen9}
          anchor={
            <Button variant='primary' onPress={openPopover9}>
              Bottom right
            </Button>
          }
          direction='bottom-right'
          attachToElement={ref.current && ref.current.parentElement}
          onClose={() => {
            setIsOpen9(false)
          }}
          style={{marginLeft: '120px'}}
        >
          <SamplePopover />
        </Popover>
      </div>

      <div
        className='popover-sample'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '800px',
        }}
      >
        <Popover
          isOpen={isOpen10}
          anchor={
            <Button variant='primary' onPress={openPopover10}>
              Bottom left
            </Button>
          }
          direction='bottom-left'
          attachToElement={ref.current && ref.current.parentElement}
          onClose={() => {
            setIsOpen10(false)
          }}
        >
          <SamplePopover />
        </Popover>

        <Popover
          isOpen={isOpen11}
          anchor={
            <Button variant='primary' onPress={openPopover11}>
              Bottom center
            </Button>
          }
          direction='bottom-center'
          attachToElement={ref.current && ref.current.parentElement}
          onClose={() => {
            setIsOpen11(false)
          }}
          style={{marginLeft: '120px'}}
        >
          <SamplePopover />
        </Popover>

        <Popover
          isOpen={isOpen12}
          anchor={
            <Button variant='primary' onPress={openPopover12}>
              Bottom right
            </Button>
          }
          direction='bottom-right'
          attachToElement={ref.current && ref.current.parentElement}
          onClose={() => {
            setIsOpen12(false)
          }}
          style={{marginLeft: '120px'}}
        >
          <SamplePopover />
        </Popover>
      </div>
    </>
  )
}
