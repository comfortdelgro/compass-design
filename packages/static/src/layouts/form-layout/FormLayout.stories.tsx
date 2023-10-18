import type {Meta} from '@storybook/react'
import React from 'react'
import {ActionBar} from '..'
import Button from '../../button'
import Divider from '../../divider'
import Dropdown from '../../dropdown'
import Radio from '../../radio'
import FormLayout from './index'

export const Basic: React.FC = () => {
  return (
    <div style={{padding: '20px'}}>
      <FormLayout>
        <FormLayout.Row columns={3}>
          <FormLayout.Group>
            <Dropdown.Select label='Salutation'>
              <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>
              <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>
              <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>
            </Dropdown.Select>
          </FormLayout.Group>
        </FormLayout.Row>
        <FormLayout.Row columns={3} breaksOnSmall={true}>
          <FormLayout.Group>
            <Radio
              variant='outlined'
              label={'option'}
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              value='1'
              tooltip='This is tooltip'
              id='item1'
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <Radio
              variant='outlined'
              label={'option'}
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              value='1'
              tooltip='This is tooltip'
              id='item1'
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <Radio
              variant='outlined'
              label={'option'}
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              value='1'
              tooltip='This is tooltip'
              id='item1'
            />
          </FormLayout.Group>
        </FormLayout.Row>
        <FormLayout.Row columns={2} breaksOnSmall={true}>
          <FormLayout.Group>
            <FormLayout.Explaination
              title={'Create New Time/Date Policy'}
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <Radio
              variant='outlined'
              label={'option'}
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              value='1'
              tooltip='This is tooltip'
              id='item1'
            />
          </FormLayout.Group>
        </FormLayout.Row>
        <Divider />
        <ActionBar>
          <ActionBar.CenterGroup>
            <Button type='submit'>Submit</Button>
          </ActionBar.CenterGroup>
        </ActionBar>
      </FormLayout>
    </div>
  )
}

const meta = {
  title: 'Example/Form Layout',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
