import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Column, Row} from '../utils/components'
import Badge from './index'

export const Basic: React.FC = () => (
  <Column>
    <h3>Basic Badge</h3>
    <Row>
      <Badge label='Default' />
    </Row>
  </Column>
)

export const Colors: React.FC = () => (
  <Column>
    <h3>Colors</h3>
    <Row>
      <Badge label='Info' color='info' />
      <Badge label='Success' color='success' />
      <Badge label='Danger' color='danger' />
      <Badge label='Warning' color='warning' />
    </Row>
    <Row>
      <Badge label='Info' color='info' variant='secondary' />
      <Badge label='Success' color='success' variant='secondary' />
      <Badge label='Danger' color='danger' variant='secondary' />
      <Badge label='Warning' color='warning' variant='secondary' />
    </Row>
    <Row>
      <Badge label='Info' color='info' variant='outline' />
      <Badge label='Success' color='success' variant='outline' />
      <Badge label='Danger' color='danger' variant='outline' />
      <Badge label='Warning' color='warning' variant='outline' />
    </Row>
  </Column>
)

export const Icons: React.FC = () => (
  <Column>
    <h3>1. Default Icons - correlated to colors</h3>

    <Row>
      <Badge label='Info' color='info' icon />
      <Badge label='Success' color='success' icon />
      <Badge label='Danger' color='danger' icon />
      <Badge label='Warning' color='warning' icon />
    </Row>
    <h3>2. Secondary Icons</h3>

    <Row>
      <Badge label='Info' color='info' icon variant='secondary' />
      <Badge label='Success' color='success' icon variant='secondary' />
      <Badge label='Danger' color='danger' icon variant='secondary' />
      <Badge label='Warning' color='warning' icon variant='secondary' />
    </Row>
    <h3>3. Custom Icons</h3>

    <Row>
      <Badge
        label='LGTM'
        color='success'
        variant='secondary'
        icon={<FontAwesomeIcon icon={faBug} />}
      />
      <Badge
        label='Practice Social Distancing'
        color='danger'
        variant='outline'
        icon={<FontAwesomeIcon icon={faBug} />}
      />
    </Row>
  </Column>
)

export const Variants: React.FC = () => (
  <Column>
    <h3>Variants</h3>

    <Row>
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
    </Row>
  </Column>
)
export const Disabled: React.FC = () => (
  <Column>
    <h3>Disabled</h3>
    <Row>
      <Badge label='Default' isDisabled />
      <Badge label='Default' isDisabled icon />
    </Row>
  </Column>
)
export const Sizes: React.FC = () => (
  <Column>
    <h3>Sizes</h3>
    <Row>
      <h4>1. Small</h4>
      <Badge label='Small' variant='primary' size='sm' icon />
    </Row>
    <Row>
      <h4>1. Medium</h4>
      <Badge label='Medium' variant='primary' size='md' icon />
    </Row>
    <Row>
      <h4>2. Large</h4>
      <Badge label='Large' variant='primary' size='lg' icon />
    </Row>
  </Column>
)
