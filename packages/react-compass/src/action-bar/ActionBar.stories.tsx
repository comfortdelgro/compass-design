import {
  faExclamationTriangle,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../button'
import Icon from '../icon'
import ActionBar from './index'

export const Default: React.FC = () => {
  return (
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
  )
}

export const LeftAndRight: React.FC = () => {
  return (
    <ActionBar>
      <ActionBar.LeftGroup>
        <Button variant='primary'>
          <Icon icon={faExclamationTriangle} />
        </Button>
      </ActionBar.LeftGroup>
      <ActionBar.RightGroup>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
      </ActionBar.RightGroup>
    </ActionBar>
  )
}

export const Left: React.FC = () => {
  return (
    <ActionBar>
      <ActionBar.LeftGroup>
        <Button variant='primary'>
          <Icon icon={faExclamationTriangle} />
        </Button>
      </ActionBar.LeftGroup>
    </ActionBar>
  )
}

export const Center: React.FC = () => {
  return (
    <ActionBar>
      <ActionBar.CenterGroup>
        <Button isDisabled>
          <Icon icon={faUserEdit} />
        </Button>
        <Button variant='danger'>Danger</Button>
      </ActionBar.CenterGroup>
    </ActionBar>
  )
}

export const Right: React.FC = () => {
  return (
    <ActionBar>
      <ActionBar.RightGroup>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
      </ActionBar.RightGroup>
    </ActionBar>
  )
}
