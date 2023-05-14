<<<<<<< HEAD
import {faThumbsUp, faVirus} from '@fortawesome/free-solid-svg-icons'
=======
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons'
import {faVirus} from '@fortawesome/free-solid-svg-icons'
>>>>>>> origin
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
    <h3>2. Custom Icons</h3>

    <Row>
      <Badge
        label='LGTM'
        color='success'
        variant='secondary'
        icon={faThumbsUp}
      />
      <Badge
        label='Practice Social Distancing'
        color='danger'
        variant='outline'
        icon={faVirus}
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
    </Row>
  </Column>
)
