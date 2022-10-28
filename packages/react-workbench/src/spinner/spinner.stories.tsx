import {Column, Row} from '../utils/components'
import Spinner from './spinner'

export const Spinners: React.FC = () => (
  <Column>
    <Row>
      <Spinner size='lg' />
      <Spinner size='md' />
      <Spinner size='sm' />
    </Row>

    <h3>Without Label</h3>
    <Row>
      <Spinner size='lg' label={false} />
      <Spinner size='md' label={false} />
      <Spinner size='sm' label={false} />
    </Row>
  </Column>
)
