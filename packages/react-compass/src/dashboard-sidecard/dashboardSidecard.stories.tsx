import {Meta} from '@storybook/react'
import React from 'react'
import Button from '../button'
import Card from '../card'
import SearchField from '../searchfield'
import DashboardSidecard from './index'

const lorem = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
  corrupti esse qui earum dolorum nulla assumenda excepturi, a
  quibusdam rem eligendi vero hic, doloremque nam deserunt,
  consequuntur aut atque eveniet.
  `

export const Default: React.FC = () => {
  const CustomCard = (
    <Card size='lg'>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
      </Card.Body>
    </Card>
  )
  return (
    <div>
      <h3>Default</h3>
      <DashboardSidecard>
        <DashboardSidecard.Header>My header</DashboardSidecard.Header>
        <DashboardSidecard.Content>
          {CustomCard}
          {CustomCard}
          <SearchField />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button css={{width: '48%'}}>Action</Button>
            <Button variant='danger' css={{width: '48%'}}>
              Warning
            </Button>
          </div>
        </DashboardSidecard.Content>
      </DashboardSidecard>
    </div>
  )
}

const meta = {
  title: 'Example/Dashboard Sidecard',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
