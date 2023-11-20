import {Button, Column, Dialog} from '@comfortdelgro/react-compass-old'
import React from 'react'

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

const NestedDialog: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)

  return (
    <Column>
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

export default NestedDialog
