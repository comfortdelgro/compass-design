import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Meta} from '@storybook/react'
import React from 'react'
import Button from '../button'
import Checkbox from '../checkbox'
import TextField from '../textfield'
import Typography from '../typography'
import DatePicker from './../date-picker'
import Textarea from './../textarea'
import Dialog from './index'

export const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [defaultOpen, setDefaultOpen] = React.useState(false)

  return (
    <div>
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
          <Dialog.Description>
            {lorem}
            <input
              type='file'
              id='avatar'
              name='avatar'
              accept='image/png, image/jpeg'
            />
          </Dialog.Description>
          <Dialog.Actions>
            <Button onPress={() => setDefaultOpen(false)}>Cancel</Button>
            <Button onPress={() => setDefaultOpen(false)}>Do it</Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>
    </div>
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
    <div>
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
    </div>
  )
}

export const Variants: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'
  const [confirmationOpen, setConfirmationOpen] = React.useState(false)
  const [alertOpen, setAlertOpen] = React.useState(false)
  const [customOpen, setCustomOpen] = React.useState(false)

  return (
    <div>
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
            <FontAwesomeIcon icon={faBug} />
          </Dialog.Icon>
        </Dialog>
      </Dialog.Trigger>

      <h3>Custom & Large Content Dialog</h3>
      <Button css={{width: '7.8rem'}} onPress={() => setCustomOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger
        isOpen={customOpen}
        handleClose={() => setCustomOpen(false)}
      >
        <Dialog
          css={{
            overflow: 'hidden',
            '.cdg-dialog-content': {height: '40rem'},
          }}
        >
          {/* css above is to set the border-radius of the scroll bar  */}
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>
            <div style={{gap: '$4'}}>
              <DatePicker css={{width: '100%'}} label='Date picker' />
              <TextField label='Text field' />
              <Textarea
                css={{
                  width: '100%',
                  textarea: {width: '100%', minHeight: '120px'},
                }}
                label='Text area'
              />
              <Checkbox>I agree to this term and condition</Checkbox>
              <Typography.Label>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit
              </Typography.Label>
              <Typography.Label>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </Typography.Label>
            </div>
          </Dialog.Description>
          <Dialog.Actions isMobile>
            <Button onPress={() => setAlertOpen(false)} variant='ghost'>
              Cancel
            </Button>
            <Button onPress={() => setAlertOpen(false)}>Ok</Button>
          </Dialog.Actions>
          <Dialog.Icon>
            <FontAwesomeIcon icon={faBug} />
          </Dialog.Icon>
        </Dialog>
      </Dialog.Trigger>
    </div>
  )
}

const meta = {
  title: 'Example/Dialog',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
