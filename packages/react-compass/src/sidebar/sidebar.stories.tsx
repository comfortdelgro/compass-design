import React from 'react'
import Button from '../button'
import {Column} from '../utils/components'
import Sidebar from './index'

export const Default: React.FC = () => {
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)
  return (
    <Column>
      <h3>Primary Sidebar</h3>
      <Button
        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
        onPress={() => setIsDefaultOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar
        isOpen={isDefaultOpen}
        handleClose={() => setIsDefaultOpen(false)}
      >
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>
    </Column>
  )
}

export const Variants: React.FC = () => {
  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)
  const [isSecondaryOpen, setIsSecondaryOpen] = React.useState(false)
  return (
    <Column>
      <h3>Primary Sidebar</h3>
      <Button
        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
        onPress={() => setIsPrimaryOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar
        variant='primary'
        isOpen={isPrimaryOpen}
        handleClose={() => setIsPrimaryOpen(false)}
      >
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>

      <h3>Secondary Sidebar</h3>
      <Button
        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
        onPress={() => setIsSecondaryOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar
        variant='secondary'
        isOpen={isSecondaryOpen}
        handleClose={() => setIsSecondaryOpen(false)}
      >
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>
    </Column>
  )
}
