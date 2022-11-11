import {Column} from '../utils/components'
import Card from './Card'
import CardBody from './cardBody'
import CardTitle from './cardTitle'

export const Cards: React.FC = () => {
  return (
    <Column>
      <Card>
        <CardBody>
          <CardTitle>hemlos</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>hemlos</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>hemlo</CardBody>
      </Card>
    </Column>
  )
}
