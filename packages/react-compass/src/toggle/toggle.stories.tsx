import {Column, Row} from '../utils/components'
import Toggle from './toggle'

export const Sizes: React.FC = () => (
  <Column>
    <h3>Small</h3>
    <Row>
      <Toggle size='sm' />
      <Toggle size='sm' defaultSelected />
      <Toggle size='sm' isDisabled />
      <Toggle size='sm' defaultSelected isDisabled />
    </Row>
    <h3>Large</h3>
    <Row>
      <Toggle size='lg' />
      <Toggle size='lg' defaultSelected />
      <Toggle size='lg' isDisabled />
      <Toggle size='lg' defaultSelected isDisabled />
    </Row>
  </Column>
)
