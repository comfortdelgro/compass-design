import {Button, Column, Dialog} from '@comfortdelgro/react-compass'
import React from 'react'

const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)

  return (
    <Column>
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

export default Default
