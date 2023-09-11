import {ActionBar, Button, Column, Icon} from '@comfortdelgro/react-compass'
import {
  faExclamationTriangle,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Default: React.FC = () => {
  return (
    <Column>
      <ActionBar>
        <ActionBar.LeftGroup>
          <Button variant='primary'>
            <Icon icon={faExclamationTriangle} />
          </Button>
        </ActionBar.LeftGroup>
        <ActionBar.CenterGroup>
          <Button isDisabled>
            <Icon icon={faUserEdit} />
          </Button>
          <Button variant='danger'>Danger</Button>
        </ActionBar.CenterGroup>
        <ActionBar.RightGroup>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
        </ActionBar.RightGroup>
      </ActionBar>
    </Column>
  )
}

export default Default
