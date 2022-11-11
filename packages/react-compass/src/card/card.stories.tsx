import {Column} from '../utils/components'
import Card from './card'
import CardBody from './cardBody'
import CardTitle from './cardTitle'

const lorem = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`

export const Cards: React.FC = () => {
  return (
    <Column>
      <Card>
        <CardBody>
          <CardTitle>This is a card title</CardTitle>
          <p>
            {lorem}
            {lorem}
          </p>
          <p>{lorem}</p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>This is a card without title</CardBody>
      </Card>
    </Column>
  )
}
