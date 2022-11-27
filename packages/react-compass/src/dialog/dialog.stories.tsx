import React from 'react'
import Button from '../button'
import {Column} from '../utils/components'
import Dialog from './index'

export const Variant: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)
  const handleDefaultClose = () => {
    setDefaultOpen(false)
  }

  const [alertOpen, setAlertOpen] = React.useState(false)
  const handleAlertClose = () => {
    setAlertOpen(false)
  }
  return (
    <Column>
      <h3>Default dialog is confirmation dialog</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setDefaultOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger
        label='Open dialog'
        isOpen={defaultOpen}
        handleClose={() => handleDefaultClose?.()}
      >
        <Dialog title='My title' confirmLabel='Do it'>
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button onPress={() => setDefaultOpen(false)}>Cancel</Button>
            <Button onPress={() => setDefaultOpen(false)}>Do it</Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>

      <h3>Alert dialog</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setAlertOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger
        label='Open dialog'
        isOpen={alertOpen}
        handleClose={() => handleAlertClose?.()}
        variant='alert'
      >
        <Dialog title='My title' confirmLabel='Do it'>
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button onPress={() => setAlertOpen(false)}>Cancel</Button>
            <Button onPress={() => setAlertOpen(false)}>Do it</Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>
    </Column>
  )
}
