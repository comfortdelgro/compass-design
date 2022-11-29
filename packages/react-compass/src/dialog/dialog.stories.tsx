import {faBug} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../button'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import Dialog from './index'

export const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)

  return (
    <Column>
      <h3>Default dialog is confirmation variant</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setDefaultOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger
        isOpen={defaultOpen}
        handleClose={() => setDefaultOpen(false)}
      >
        <Dialog>
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button onPress={() => setDefaultOpen(false)}>Cancel</Button>
            <Button onPress={() => setDefaultOpen(false)}>Do it</Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>
    </Column>
  )
}

export const Variants: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [confirmationOpen, setConfirmationOpen] = React.useState(false)
  const [alertOpen, setAlertOpen] = React.useState(false)

  return (
    <Column>
      <h3>Confirmation dialog</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setConfirmationOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger
        isOpen={confirmationOpen}
        handleClose={() => setConfirmationOpen(false)}
        variant='confirmation'
      >
        <Dialog>
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button onPress={() => setConfirmationOpen(false)}>Cancel</Button>
            <Button onPress={() => setConfirmationOpen(false)}>Do it</Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>

      <h3>Alert dialog</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setAlertOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger
        isOpen={alertOpen}
        handleClose={() => setAlertOpen(false)}
        variant='alert'
      >
        <Dialog>
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button onPress={() => setAlertOpen(false)}>Ok</Button>
          </Dialog.Actions>
          <Dialog.Icon>
            <Icon icon={faBug} />
          </Dialog.Icon>
        </Dialog>
      </Dialog.Trigger>
    </Column>
  )
}
