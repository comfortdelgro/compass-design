import {faThumbsUp, faVirus} from '@fortawesome/free-solid-svg-icons'
import {Column, Row} from '../utils/components'
import Badge from './badge'

export const Variants: React.FC = () => (
  <Column>
    <Row>
      <Badge label='Primary' color='info' variant='primary' />
      <Badge label='Secondary' color='success' variant='secondary' />
      <Badge label='Outline' color='danger' variant='outline' />
    </Row>

    <h3>With Default Icons</h3>

    <Row>
      <Badge label='Primary' color='info' variant='primary' icon />
      <Badge label='Secondary' color='success' variant='secondary' icon />
      <Badge label='Outline' color='danger' variant='outline' icon />
    </Row>
  </Column>
)

export const Colors: React.FC = () => (
  <Column>
    <Row>
      <Badge label='Info' color='info' />
      <Badge label='Success' color='success' />
      <Badge label='Danger' color='danger' />
      <Badge label='Warning' color='warning' />
    </Row>

    <h3>With Default Icons</h3>

    <Row>
      <Badge label='Info' color='info' icon />
      <Badge label='Success' color='success' icon />
      <Badge label='Warning' color='warning' icon />
      <Badge label='Danger' color='danger' icon />
    </Row>

    <h3>With Custom Icons</h3>

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
