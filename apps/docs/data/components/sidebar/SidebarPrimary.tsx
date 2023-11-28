import {Button, Sidebar} from '@comfortdelgro/react-compass'
import React from 'react'

interface PrimarySidebarProps {
  position: 'left' | 'right'
}

function PrimarySidebar({position = 'left'}: PrimarySidebarProps) {
  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)
  return (
    <>
      <Button
        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
        onPress={() => setIsPrimaryOpen(true)}
      >
        Open sidebar
      </Button>

      <Sidebar
        isOpen={isPrimaryOpen}
        handleClose={() => setIsPrimaryOpen(false)}
        variant='primary'
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
    </>
  )
}

export default PrimarySidebar
