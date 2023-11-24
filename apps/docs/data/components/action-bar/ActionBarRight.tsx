import {ActionBar, Button, Column} from '@comfortdelgro/react-compass-old'
import React from 'react'

const Right: React.FC = () => {
  return (
    <Column>
      <ActionBar>
        <ActionBar.RightGroup>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
        </ActionBar.RightGroup>
      </ActionBar>
    </Column>
  )
}

export default Right
