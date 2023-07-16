import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../button'
import {Column} from '../utils/components'
import Modal from './index'

export const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)
  const handleDefaultClose = () => {
    setDefaultOpen(false)
  }
  return (
    <Column>
      <h3>Default Modal is Medium sized</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setDefaultOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger
        isOpen={defaultOpen}
        handleClose={() => handleDefaultClose?.()}
        className='my-modal-trigger'
      >
        <Modal className='my-modal'>
          <Modal.Title>My small title</Modal.Title>
          <Modal.CloseIcon>
            <FontAwesomeIcon icon={faXmark} />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
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

const ChildModal: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [isChildOpen, setIsChildOpen] = React.useState(false)
  const handleChildClose = () => {
    setIsChildOpen(false)
  }

  return (
    <>
      <Button css={{width: '7.8rem'}} onPress={() => setIsChildOpen(true)}>
        Open Child Modal
      </Button>
      <Modal.Trigger
        isOpen={isChildOpen}
        handleClose={() => handleChildClose?.()}
        className='parent-modal-trigger'
      >
        <Modal className='parent-modal' css={{width: '20rem'}}>
          <Modal.Title>My parent modal</Modal.Title>
          <Modal.CloseIcon>
            <FontAwesomeIcon icon={faXmark} />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setIsChildOpen(false)}>Cancel</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </>
  )
}

export const NestedModal: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [parentOpen, setParentOpen] = React.useState(false)
  const handleParentClose = () => {
    setParentOpen(false)
  }
  return (
    <Column>
      <h3>Default Modal is Medium sized</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setParentOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger
        isOpen={parentOpen}
        handleClose={() => handleParentClose?.()}
        className='my-modal-trigger'
      >
        <Modal className='my-modal'>
          <Modal.Title>My small title</Modal.Title>
          <Modal.CloseIcon>
            <FontAwesomeIcon icon={faXmark} />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setParentOpen(false)}>Cancel</Button>
            <ChildModal />
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </Column>
  )
}
