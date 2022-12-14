import {faBug} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../button'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import Error from './index'

export const Default: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'

  return (
    <Column>
      <h3>Default error is primary variant</h3>

      <Error>
        <Error.Icon>
          <Icon icon={faBug} />
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
    </Column>
  )
}

export const Variant: React.FC = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'

  return (
    <Column>
      <h3>Primary variant</h3>
      <Error variant='primary'>
        <Error.Icon>
          <Icon icon={faBug} />
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
          <Icon icon={faBug} />
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
    </Column>
  )
}
