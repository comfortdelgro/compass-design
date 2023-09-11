import {ActionBar, Button, Column, Icon} from '@comfortdelgro/react-compass'
import {faUserEdit} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Center: React.FC = () => {
  return (
    <Column>
      <ActionBar>
        <ActionBar.CenterGroup>
          <Button isDisabled>
            <Icon icon={faUserEdit} />
          </Button>
          <Button variant='danger'>Danger</Button>
        </ActionBar.CenterGroup>
      </ActionBar>
    </Column>
  )
}

export default Center
