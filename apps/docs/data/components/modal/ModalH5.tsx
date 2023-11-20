import {Button, Column, Icon, Modal} from '@comfortdelgro/react-compass-old'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const ModalH5: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'

  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [isOpenModal2, setIsOpenModal2] = React.useState(false)

  const handleModalClose = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <Column>
        <h3>Default</h3>
        <Button css={{width: '7.8rem'}} onPress={() => setIsOpenModal(true)}>
          Open Modal
        </Button>
        <Modal.Trigger
          isOpen={isOpenModal}
          handleClose={() => handleModalClose?.()}
        >
          <Modal h5>
            <Modal.Title h5>
              Are you sure that you want to remove “Starbucks, Junction 8”?
            </Modal.Title>
            <Modal.Description h5>
              <Column>
                <Button h5>Remove</Button>
                <Button h5 variant='danger'>
                  Cancel
                </Button>
              </Column>
            </Modal.Description>
          </Modal>
        </Modal.Trigger>
      </Column>
      <Column>
        <h3>Open Modal with icon close</h3>
        <Button css={{width: '7.8rem'}} onPress={() => setIsOpenModal2(true)}>
          Open Modal
        </Button>
        <Modal.Trigger isOpen={isOpenModal2}>
          <Modal h5>
            <Modal.Title h5>Feedback</Modal.Title>
            <Modal.CloseIcon>
              <Icon
                onClick={() => setIsOpenModal2(false)}
                icon={faXmark}
                style={{width: 25, height: 25, paddingTop: 24}}
              />
            </Modal.CloseIcon>
            <Modal.Description h5>{lorem}</Modal.Description>
          </Modal>
        </Modal.Trigger>
      </Column>
    </>
  )
}

export default ModalH5
