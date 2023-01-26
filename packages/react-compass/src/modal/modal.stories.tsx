import {faXmark} from '@fortawesome/free-solid-svg-icons'
import type {Placement} from '@react-types/overlays'
import React from 'react'
import Button from '../button'
import Dropdown from '../dropdown'
import Icon from '../icon'
import TextField from '../textfield'
import {Tooltip, TooltipTrigger} from '../tooltip'
import {Column} from '../utils/components'
import Modal from './index'

export const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)
  const handleDefaultClose = () => {
    setDefaultOpen(false)
  }
  const rightSides = [
    {triggerElement: <a href='#'>Right tooltip</a>, placement: 'right'},
    {
      triggerElement: <a href='#'>Right-bottom tooltip</a>,
      placement: 'right bottom',
    },
    {triggerElement: <a href='#'>Right-top tooltip</a>, placement: 'right top'},
  ]
  return (
    <Column>
      <h3>Default Modal is Medium sized</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setDefaultOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger
        isOpen={defaultOpen}
        handleClose={() => handleDefaultClose?.()}
      >
        <Modal>
          <Modal.Title>My small title</Modal.Title>
          <Modal.CloseIcon>
            <Icon icon={faXmark} />
          </Modal.CloseIcon>
          <Modal.Description>
            {lorem}
            <TextField />
            <Dropdown label='Favorite Animal' placeholder='Choose an animal'>
              <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
              <Dropdown.Item key='cat'>Cat</Dropdown.Item>
              <Dropdown.Item key='dog'>Dog</Dropdown.Item>
              <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
              <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
              <Dropdown.Item key='snake'>Snake</Dropdown.Item>
            </Dropdown>
            {rightSides.map((side) => {
              const placement = side.placement as Placement
              return (
                <TooltipTrigger placement={placement}>
                  {side.triggerElement}
                  <Tooltip title='Tooltip' dismissible>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae blanditiis laborum commodi mollitia officiis
                      minus ipsum totam fuga odit, dicta magnam numquam
                      reprehenderit et sequi dignissimos iusto deleniti. Quia,
                      modi
                    </p>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        marginTop: '16px',
                        gap: '16px',
                      }}
                    >
                      <Button fullWidth variant='primary'>
                        Button
                      </Button>
                      <Button
                        fullWidth
                        variant='secondary'
                        css={{backgroundColor: 'white'}}
                      >
                        Button
                      </Button>
                    </div>
                  </Tooltip>
                </TooltipTrigger>
              )
            })}
          </Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setDefaultOpen(false)}>Cancel</Button>
            <Button onPress={() => setDefaultOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </Column>
  )
}

export const Variants: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [smallOpen, setSmallOpen] = React.useState(false)
  const handleSmallClose = () => {
    setSmallOpen(false)
  }
  const [mediumOpen, setMediumOpen] = React.useState(false)
  const handleMediumClose = () => {
    setMediumOpen(false)
  }
  const [largeOpen, setLargeOpen] = React.useState(false)
  const handleLargeClose = () => {
    setLargeOpen(false)
  }
  return (
    <Column>
      <h3>Small sized modal</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setSmallOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger
        isOpen={smallOpen}
        handleClose={() => handleSmallClose?.()}
        size='sm'
      >
        <Modal>
          <Modal.Title>My small title</Modal.Title>
          <Modal.Description>
            {lorem}
            <TextField />
          </Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setSmallOpen(false)}>Cancel</Button>
            <Button onPress={() => setSmallOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>

      <h3>Medium sized modal</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setMediumOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger
        isOpen={mediumOpen}
        handleClose={() => handleMediumClose?.()}
        size='md'
      >
        <Modal>
          <Modal.Title>My medium title</Modal.Title>
          <Modal.Description>
            {lorem} <TextField />
          </Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setMediumOpen(false)}>Cancel</Button>
            <Button onPress={() => setMediumOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>

      <h3>Large sized modal</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setLargeOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger
        isOpen={largeOpen}
        handleClose={() => handleLargeClose?.()}
        size='lg'
      >
        <Modal>
          <Modal.Title>My large title</Modal.Title>
          <Modal.Description>
            {lorem} <TextField />
          </Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setLargeOpen(false)}>Cancel</Button>
            <Button onPress={() => setLargeOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </Column>
  )
}
