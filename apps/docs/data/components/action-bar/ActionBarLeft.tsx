import {ActionBar, Button, Column, Icon} from '@comfortdelgro/react-compass'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Left: React.FC = () => {
  return (
    <Column>
      <ActionBar>
        <ActionBar.LeftGroup>
          <Button variant='primary'>
            <Icon icon={faExclamationTriangle} />
          </Button>
        </ActionBar.LeftGroup>
      </ActionBar>
    </Column>
  )
}

export default Left
