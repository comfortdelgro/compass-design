import HeartFilled from '@comfortdelgro/compass-icons/react/filled/heart-filled'
import React from 'react'

import {Meta} from '@storybook/react'
import Alert from './index'

const AlertContent: React.FC = () => (
  <>
    A simple alert text. We can have a <a href='#'>link</a>.
  </>
)
export const Basic: React.FC = () => (
  <div>
    <h3>Basic Alert</h3>
    <Alert>
      <AlertContent />
    </Alert>
  </div>
)

export const Indismissible: React.FC = () => (
  <div>
    <h3>1. Colors</h3>
    <Alert color='info'>
      <AlertContent />
    </Alert>

    <Alert color='success'>
      <AlertContent />
    </Alert>

    <Alert color='danger'>
      <AlertContent />
    </Alert>

    <Alert color='warning'>
      <AlertContent />
    </Alert>

    <h3>2. Without Icons</h3>

    <Alert icon={false}>
      <AlertContent />
    </Alert>

    <h3>3. Custom Icons</h3>

    <Alert color='success' icon={<HeartFilled />}>
      <AlertContent />
    </Alert>
  </div>
)

const meta = {
  title: 'Example/Alert',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
