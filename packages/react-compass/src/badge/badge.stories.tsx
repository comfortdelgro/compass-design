import Clock from '@comfortdelgro/compass-icons/react/clock-outlined'
import HeartFilled from '@comfortdelgro/compass-icons/react/filled/heart-filled'
import Tick from '@comfortdelgro/compass-icons/react/tick'

import {Meta} from '@storybook/react'
import React from 'react'
import {Layout} from '..'
import Badge from './index'

export const Basic: React.FC = () => (
  <div>
    <h3>Basic Badge</h3>
    <div>
      <Badge label='Default' />
    </div>
  </div>
)

export const Colors: React.FC = () => (
  <Layout style={{gap: '10px', padding: '10px'}}>
    <h3>Colors</h3>
    <Layout style={{gap: '10px'}}>
      <Badge label='Info' color='info' />
      <Badge label='Success' color='success' />
      <Badge label='Danger' color='danger' />
      <Badge label='Warning' color='warning' />
    </Layout>
    <Layout style={{gap: '10px'}}>
      <Badge label='Info' color='info' variant='secondary' />
      <Badge label='Success' color='success' variant='secondary' />
      <Badge label='Danger' color='danger' variant='secondary' />
      <Badge label='Warning' color='warning' variant='secondary' />
    </Layout>
    <Layout style={{gap: '10px'}}>
      <Badge label='Info' color='info' variant='outline' />
      <Badge label='Success' color='success' variant='outline' />
      <Badge label='Danger' color='danger' variant='outline' />
      <Badge label='Warning' color='warning' variant='outline' />
    </Layout>
  </Layout>
)

export const Icons: React.FC = () => (
  <Layout style={{gap: '10px', padding: '10px'}}>
    <h3>1. Default Icons - correlated to colors</h3>

    <Layout style={{gap: '10px'}}>
      <Badge label='Info' color='info' icon />
      <Badge label='Success' color='success' icon />
      <Badge label='Danger' color='danger' icon />
      <Badge label='Warning' color='warning' icon />
    </Layout>
    <h3>2. Secondary Icons</h3>

    <Layout style={{gap: '10px'}}>
      <Badge label='Info' color='info' icon variant='secondary' />
      <Badge label='Success' color='success' icon variant='secondary' />
      <Badge label='Danger' color='danger' icon variant='secondary' />
      <Badge label='Warning' color='warning' icon variant='secondary' />
    </Layout>
    <h3>3. Custom Icons</h3>

    <Layout style={{gap: '10px'}}>
      <Badge
        label='LGTM'
        color='success'
        variant='secondary'
        icon={<HeartFilled />}
      />
      <Badge
        label='Practice Social Distancing'
        color='danger'
        variant='outline'
        icon={<HeartFilled />}
      />
    </Layout>
  </Layout>
)

export const Variants: React.FC = () => (
  <Layout style={{gap: '10px', padding: '10px'}}>
    <h3>Variants</h3>

    <Layout style={{gap: '10px'}}>
      <Badge label='Primary' variant='primary' icon />
      <Badge label='Secondary' variant='secondary' icon />
      <Badge label='Outline' variant='outline' icon />
      <Badge
        css={{maxWidth: 210}}
        label='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        variant='h5'
        destination='A'
      />
      <Badge label='Current Location' variant='h5' destination='B' />
      <Badge label='Current Location' variant='h5' destination='C' isRevert />
    </Layout>
  </Layout>
)
export const Disabled: React.FC = () => (
  <Layout style={{gap: '10px', padding: '10px'}}>
    <h3>Disabled</h3>
    <Layout style={{gap: '10px'}}>
      <Badge label='Default' isDisabled />
      <Badge label='Default' isDisabled icon />
    </Layout>
  </Layout>
)
export const Sizes: React.FC = () => (
  <Layout style={{gap: '10px', padding: '10px'}}>
    <h3>Sizes</h3>
    <Layout>
      <h4>1. Small</h4>
      <Badge label='Small' variant='primary' size='sm' icon />
    </Layout>

    <Layout>
      <h4>1. Default</h4>
      <Badge label='Default' variant='primary' icon />
    </Layout>

    <Layout>
      <h4>2. Large</h4>
      <Badge label='Large' variant='primary' size='lg' icon />
    </Layout>
  </Layout>
)
export const Status: React.FC = () => (
  <Layout style={{gap: '10px', padding: '10px'}}>
    <h3>Status</h3>
    <Layout direction='row' style={{gap: '10px'}}>
      <Badge status='online' variant='rounded' statusSize='8' icon={<Tick />} />
      <Badge
        status='online'
        variant='rounded'
        statusSize='12'
        icon={<Tick />}
      />
      <Badge
        status='online'
        variant='rounded'
        statusSize='16'
        icon={<Tick />}
      />
      <Badge
        status='online'
        variant='rounded'
        statusSize='20'
        icon={<Tick />}
      />
      <Badge
        status='online'
        variant='rounded'
        statusSize='24'
        icon={<Tick />}
      />
      <Badge
        status='online'
        variant='rounded'
        statusSize='28'
        icon={<Tick />}
      />
    </Layout>
    <Layout direction='row' style={{gap: '10px'}}>
      <Badge status='away' variant='rounded' statusSize='8' icon={<Clock />} />
      <Badge status='away' variant='rounded' statusSize='12' icon={<Clock />} />
      <Badge status='away' variant='rounded' statusSize='16' icon={<Clock />} />
      <Badge status='away' variant='rounded' statusSize='20' icon={<Clock />} />
      <Badge status='away' variant='rounded' statusSize='24' icon={<Clock />} />
      <Badge status='away' variant='rounded' statusSize='28' icon={<Clock />} />
    </Layout>
    <Layout direction='row' style={{gap: '10px'}}>
      <Badge status='busy' variant='rounded' statusSize='8' />
      <Badge status='busy' variant='rounded' statusSize='12' />
      <Badge status='busy' variant='rounded' statusSize='16' />
      <Badge status='busy' variant='rounded' statusSize='20' />
      <Badge status='busy' variant='rounded' statusSize='24' />
      <Badge status='busy' variant='rounded' statusSize='28' />
    </Layout>
    <Layout direction='row' style={{gap: '10px'}}>
      <Badge status='offline' variant='rounded' statusSize='8' />
      <Badge status='offline' variant='rounded' statusSize='12' />
      <Badge status='offline' variant='rounded' statusSize='16' />
      <Badge status='offline' variant='rounded' statusSize='20' />
      <Badge status='offline' variant='rounded' statusSize='24' />
      <Badge status='offline' variant='rounded' statusSize='28' />
    </Layout>
  </Layout>
)

const meta = {
  title: 'Example/Badge',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
