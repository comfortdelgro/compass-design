import {Button, Column, Modal} from '@comfortdelgro/react-compass'
import React from 'react'

const Variants: React.FC = () => {
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
          <Modal.Description>{lorem}</Modal.Description>
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
          <Modal.Description>{lorem}</Modal.Description>
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
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setLargeOpen(false)}>Cancel</Button>
            <Button onPress={() => setLargeOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </Column>
  )
}
export default Variants
