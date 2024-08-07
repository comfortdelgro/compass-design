import Edit from '@comfortdelgro/compass-icons/react/edit'
import {Button, Card, Column} from '@comfortdelgro/react-compass'

const lorem = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`
const Variants: React.FC = () => {
  const isDisabled = true

  return (
    <Column>
      <h3>Default</h3>
      <Card size='lg' isShadowless={true}>
        <Card.Body>
          <Card.Title style={{display: 'flex', alignItems: 'center'}}>
            <h3
              className='card-title'
              style={{fontSize: 'inherit', margin: 0, width: '100%'}}
            >
              Card title
            </h3>
            <Button variant='ghost'>
              <Edit />
            </Button>
          </Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
          <Card.Action>
            <Button variant='primary'>Button</Button>
            <Button variant='secondary'>Button</Button>
          </Card.Action>
        </Card.Body>
      </Card>
      <h3>Disabled</h3>
      <Card isDisabled={true} size='lg' isShadowless={true}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
          <Card.Action>
            <Button isDisabled={isDisabled} variant='primary'>
              Button
            </Button>
            <Button isDisabled={isDisabled} variant='secondary'>
              Button
            </Button>
          </Card.Action>
        </Card.Body>
      </Card>
    </Column>
  )
}

export default Variants
