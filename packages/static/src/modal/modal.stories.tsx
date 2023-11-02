import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Meta} from '@storybook/react'
import React from 'react'
import Button from '../button'
import Icon from '../icon'
import Modal from './index'

export const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)
  const handleDefaultClose = () => {
    setDefaultOpen(false)
  }
  return (
    <div>
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
    </div>
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
    <div>
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
          <Modal.Description>
            {lorem}
            <div
              style={{
                height: '40rem',
                backgroundColor: 'grey',
                margin: '2rem',
                borderRadius: '1rem',
              }}
            />
          </Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setLargeOpen(false)}>Cancel</Button>
            <Button onPress={() => setLargeOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </div>
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

export const NestedModal: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [parentOpen, setParentOpen] = React.useState(false)
  const handleParentClose = () => {
    setParentOpen(false)
  }
  return (
    <div>
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
    </div>
  )
}

export const H5: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [isOpenModal2, setIsOpenModal2] = React.useState(false)

  const handleModalClose = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <div>
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
              <div>
                <Button h5>Remove</Button>
                <Button h5 variant='danger'>
                  Cancel
                </Button>
              </div>
            </Modal.Description>
          </Modal>
        </Modal.Trigger>
      </div>
      <div>
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
      </div>
    </>
  )
}

const meta = {
  title: 'Example/Modal',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
