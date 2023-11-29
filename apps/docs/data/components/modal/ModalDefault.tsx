import {Button, Column, Modal} from '@comfortdelgro/react-compass'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)
  const handleDefaultClose = () => {
    setDefaultOpen(false)
  }
  return (
    <Column>
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
export default Default
