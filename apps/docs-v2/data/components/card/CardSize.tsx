import {Button, Card, Column} from '@comfortdelgro/react-compass'

const lorem = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`

const Sizes: React.FC = () => {
  const backgroundSrc =
    'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

  return (
    <Column>
      <h3>Basic card small size</h3>
      <Card size='sm'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 5)}</p>
          <Card.Action>
            <Button variant='primary'>Button</Button>
            <Button variant='primary'>Button</Button>
          </Card.Action>
        </Card.Body>
      </Card>

      <h3>Basic card large size</h3>
      <Card size='lg'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
          <Card.Action>
            <Button variant='primary'>Button</Button>
            <Button variant='secondary'>Button</Button>
          </Card.Action>
        </Card.Body>
      </Card>

      <h3>Basic card full size</h3>
      <Card size='full'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem}</p>
          <Card.Action>
            <Button variant='primary'>Button</Button>
            <Button variant='secondary'>Button</Button>
          </Card.Action>
        </Card.Body>
      </Card>

      <h3>Basic card customized size</h3>
      <Card css={{maxWidth: '400px'}} isClickable>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem}</p>
          <Card.Action>
            <Button variant='primary'>Button</Button>
            <Button variant='secondary'>Button</Button>
          </Card.Action>
        </Card.Body>
      </Card>
    </Column>
  )
}

export default Sizes
