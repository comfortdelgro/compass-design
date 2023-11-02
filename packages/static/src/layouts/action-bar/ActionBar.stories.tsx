import {
  faExclamationTriangle,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons'
import type {Meta} from '@storybook/react'
import React from 'react'
import Button from '../../button'
import Icon from '../../icon'
import ActionBar from './index'

export const Basic: React.FC = () => {
  return (
    <div style={{padding: '20px'}}>
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
        </ActionBar.CenterGroup>
        <ActionBar.RightGroup>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
        </ActionBar.RightGroup>
      </ActionBar>
    </div>
  )
}

export const LeftAndRight: React.FC = () => {
  return (
    <div style={{padding: '20px'}}>
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
    </div>
  )
}

export const Left: React.FC = () => {
  return (
    <div style={{padding: '20px'}}>
      <ActionBar>
        <ActionBar.LeftGroup>
          <Button variant='primary'>
            <Icon icon={faExclamationTriangle} />
          </Button>
        </ActionBar.LeftGroup>
      </ActionBar>
    </div>
  )
}

export const Right: React.FC = () => {
  return (
    <div style={{padding: '20px'}}>
      <ActionBar>
        <ActionBar.RightGroup>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
        </ActionBar.RightGroup>
      </ActionBar>
    </div>
  )
}

export const Center: React.FC = () => {
  return (
    <div style={{padding: '20px'}}>
      <ActionBar>
        <ActionBar.CenterGroup>
          <Button isDisabled>
            <Icon icon={faUserEdit} />
          </Button>
        </ActionBar.CenterGroup>
      </ActionBar>
    </div>
  )
}

const meta = {
  title: 'Example/Action Bar',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
