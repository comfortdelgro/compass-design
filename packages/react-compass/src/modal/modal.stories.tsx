import React from 'react'
import Button from '../button'
import TextField from '../textfield'
import {Column} from '../utils/components'
import Modal from './index'

export const Variant: React.FC = () => {
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
        label='Open modal'
        isOpen={smallOpen}
        handleClose={() => handleSmallClose?.()}
        size='sm'
      >
        <Modal title='My title' confirmLabel='Do it'>
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
        label='Open modal'
        isOpen={mediumOpen}
        handleClose={() => handleMediumClose?.()}
        size='md'
      >
        <Modal title='My title' confirmLabel='Do it'>
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
        label='Open modal'
        isOpen={largeOpen}
        handleClose={() => handleLargeClose?.()}
        size='lg'
      >
        <Modal title='My title' confirmLabel='Do it'>
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
