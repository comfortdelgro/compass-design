// Modal.tsx
import Button from '@comfortdelgro/react-compass/button'
import Icon from '@comfortdelgro/react-compass/icon'
import Modal from '@comfortdelgro/react-compass/modal'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'

export const SmallModal: React.FC = () => {
  const [smallOpen, setSmallOpen] = useState(false)
  const handleSmallClose = () => {
    setSmallOpen(false)
  }

  return (
    <>
      <Button onPress={() => setSmallOpen(true)}>Open Small Modal</Button>
      <Modal.Trigger
        isOpen={smallOpen}
        handleClose={handleSmallClose}
        size='sm'
      >
        <Modal>
          <Modal.Title>My Small Title</Modal.Title>
          <Modal.CloseIcon>
            <Icon icon={faXmark} />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button onPress={handleSmallClose}>Cancel</Button>
            <Button onPress={handleSmallClose}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </>
  )
}

export const MediumModal: React.FC = () => {
  const [mediumOpen, setMediumOpen] = useState(false)
  const handleMediumClose = () => {
    setMediumOpen(false)
  }

  return (
    <>
      <Button onPress={() => setMediumOpen(true)}>Open Medium Modal</Button>
      <Modal.Trigger isOpen={mediumOpen} handleClose={handleMediumClose}>
        <Modal>
          <Modal.Title>My Medium Title</Modal.Title>
          <Modal.CloseIcon>
            <Icon icon={faXmark} />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button onPress={handleMediumClose}>Cancel</Button>
            <Button onPress={handleMediumClose}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </>
  )
}

export const LargeModal: React.FC = () => {
  const [largeOpen, setLargeOpen] = useState(false)
  const handleLargeClose = () => {
    setLargeOpen(false)
  }

  return (
    <>
      <Button onPress={() => setLargeOpen(true)}>Open Large Modal</Button>
      <Modal.Trigger
        isOpen={largeOpen}
        handleClose={handleLargeClose}
        size='lg'
      >
        <Modal>
          <Modal.Title>My Large Title</Modal.Title>
          <Modal.CloseIcon>
            <Icon icon={faXmark} />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button onPress={handleLargeClose}>Cancel</Button>
            <Button onPress={handleLargeClose}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </>
  )
}
