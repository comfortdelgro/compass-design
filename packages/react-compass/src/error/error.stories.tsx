import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Meta} from '@storybook/react'
import React from 'react'
import Button from '../button'
import Error from './index'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

export const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'

  return (
    <div style={{...style}}>
      <h3>Default error is primary variant</h3>

      <Error>
        <Error.Icon>
          <FontAwesomeIcon icon={faBug} />
        </Error.Icon>
        <Error.Title>Error: some bugs</Error.Title>
        <Error.Description>{lorem}</Error.Description>
        <Error.Action>
          <Button
            onPress={() => {
              console.log('click ok')
            }}
          >
            OK
          </Button>
        </Error.Action>
      </Error>
    </div>
  )
}

export const Variant: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'

  return (
    <div style={{...style}}>
      <h3>Primary variant</h3>
      <Error variant='primary'>
        <Error.Icon>
          <FontAwesomeIcon icon={faBug} />
        </Error.Icon>
        <Error.Title>Error: some bugs</Error.Title>
        <Error.Description>{lorem}</Error.Description>
        <Error.Action>
          <Button
            onPress={() => {
              console.log('click ok')
            }}
          >
            OK
          </Button>
        </Error.Action>
      </Error>

      <h3>Secondary variant</h3>
      <Error variant='secondary'>
        <Error.Image>
          <FontAwesomeIcon icon={faBug} style={{height: 'inherit'}} />
        </Error.Image>
        <Error.Title>Error: some bugs</Error.Title>
        <Error.Description>{lorem}</Error.Description>
        <Error.Action>
          <Button
            onPress={() => {
              console.log('click ok')
            }}
          >
            OK
          </Button>
        </Error.Action>
      </Error>
    </div>
  )
}

const meta = {
  title: 'Example/Error',
  component: Variant,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variant>

export default meta
