import {Column, Icon} from '@comfortdelgro/react-compass'
import Button from '@comfortdelgro/react-compass/button'
import Dialog from '@comfortdelgro/react-compass/dialog'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)

  return (
    <Column>
      <h3>Default dialog is confirmation variant</h3>

      <Button
        css={{width: '7.8rem'}}
        onPress={() => setDefaultOpen(true)}
        variant='secondary'
      >
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
            <Button onPress={() => setDefaultOpen(false)} variant='secondary'>
              Cancel
            </Button>
            <Button onPress={() => setDefaultOpen(false)} variant='secondary'>
              Do it
            </Button>
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

      <Button
        css={{width: '7.8rem'}}
        onPress={() => setConfirmationOpen(true)}
        variant='secondary'
      >
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
            <Button
              onPress={() => setConfirmationOpen(false)}
              variant='secondary'
            >
              Cancel
            </Button>
            <Button
              onPress={() => setConfirmationOpen(false)}
              variant='secondary'
            >
              Do it
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>

      <h3>Alert dialog</h3>

      <Button
        css={{width: '7.8rem'}}
        onPress={() => setAlertOpen(true)}
        variant='danger'
      >
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
            <Button onPress={() => setAlertOpen(false)} variant='secondary'>
              Ok
            </Button>
          </Dialog.Actions>
          <Dialog.Icon>
            <Icon icon={faBug} />
          </Dialog.Icon>
        </Dialog>
      </Dialog.Trigger>
    </Column>
  )
}

const Child: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)

  return (
    <>
      <Button
        variant='secondary'
        css={{width: '7.8rem'}}
        onPress={() => setDefaultOpen(true)}
      >
        Open Child
      </Button>
      <Dialog.Trigger
        isOpen={defaultOpen}
        handleClose={() => setDefaultOpen(false)}
      >
        <Dialog css={{width: '20rem'}}>
          <Dialog.Title>My Child dialog</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button variant='secondary' onPress={() => setDefaultOpen(false)}>
              Cancel
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>
    </>
  )
}

export const NestedDialog: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)

  return (
    <Column>
      <h3>Nested Dialog</h3>
      <Button
        variant='secondary'
        css={{width: '7.8rem'}}
        onPress={() => setDefaultOpen(true)}
        data-target='parent-dialog' // this is required for the focus trap to work
      >
        Open Parent
      </Button>
      <Dialog.Trigger
        isOpen={defaultOpen}
        handleClose={() => setDefaultOpen(false)}
        id='parent-dialog' // this is required for the focus trap to work
      >
        <Dialog>
          <Dialog.Title>My Parent dialog</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button variant='secondary' onPress={() => setDefaultOpen(false)}>
              Cancel
            </Button>
            <Child />
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>
    </Column>
  )
}
