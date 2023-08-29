import {Button, Column, Modal} from '@comfortdelgro/react-compass'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

const ChildModal: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [isChildOpen, setIsChildOpen] = React.useState(false)
  const handleChildClose = () => {
    setIsChildOpen(false)
  }

  return (
    <>
      <Button
        variant='secondary'
        css={{width: '7.8rem'}}
        onPress={() => setIsChildOpen(true)}
      >
        Open Child
      </Button>
      <Modal.Trigger
        isOpen={isChildOpen}
        handleClose={() => handleChildClose?.()}
        className='parent-modal-trigger'
      >
        <Modal css={{width: '20rem'}}>
          <Modal.Title>My child modal</Modal.Title>
          <Modal.CloseIcon>
            <FontAwesomeIcon icon={faXmark} />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button variant='secondary' onPress={() => setIsChildOpen(false)}>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </>
  )
}

const NestedModal: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [parentOpen, setParentOpen] = React.useState(false)
  const handleParentClose = () => {
    setParentOpen(false)
  }
  return (
    <Column>
      <h3>Nested Modal</h3>
      <Button
        variant='secondary'
        css={{width: '7.8rem'}}
        onPress={() => setParentOpen(true)}
        data-target='parent-modal' // This is needed for accessibility. When modal unmouts, focus will be set to this element
      >
        Open Modal
      </Button>
      <Modal.Trigger
        isOpen={parentOpen}
        handleClose={() => handleParentClose?.()}
        className='my-modal-trigger'
        id='parent-modal'
      >
        <Modal>
          <Modal.Title>My parent modal</Modal.Title>
          <Modal.CloseIcon>
            <FontAwesomeIcon icon={faXmark} />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button variant='secondary' onPress={() => setParentOpen(false)}>
              Cancel
            </Button>
            <ChildModal />
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </Column>
  )
}

export default NestedModal
