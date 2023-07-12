import {Button, Sidebar} from '@comfortdelgro/react-compass'
import React from 'react'

interface PrimarySidebarProps {
  position: 'left' | 'right'
}

export function PrimarySidebar({position = 'left'}: PrimarySidebarProps) {
  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)
  return (
    <>
      <Button
        className='c-hKssGC-hYGuEl-variant-primary'
        css={{height: '3.5rem', fontSize: '1em', color: 'black'}}
        onPress={() => setIsPrimaryOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar
        position={position}
        isOpen={isPrimaryOpen}
        handleClose={() => setIsPrimaryOpen(false)}
      >
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button
            className='c-hKssGC-hYGuEl-variant-primary'
            css={{width: '45%', height: '100%', fontSize: '1em'}}
          >
            Action
          </Button>
          <Button
            className='c-hKssGC-hYGuEl-variant-primary'
            css={{width: '45%', height: '100%', fontSize: '1em'}}
          >
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>
    </>
  )
}

export function SecondarySidebar() {
  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)
  return (
    <>
      <Button
        className='c-hKssGC-hYGuEl-variant-primary'
        css={{height: '3.5rem', fontSize: '1em', color: 'black'}}
        onPress={() => setIsPrimaryOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar
        isOpen={isPrimaryOpen}
        handleClose={() => setIsPrimaryOpen(false)}
        variant='secondary'
      >
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button
            className='c-hKssGC-hYGuEl-variant-primary'
            css={{width: '45%', height: '100%', fontSize: '1em'}}
          >
            Action
          </Button>
          <Button
            className='c-hKssGC-hYGuEl-variant-primary'
            css={{width: '45%', height: '100%', fontSize: '1em'}}
          >
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>
    </>
  )
}
