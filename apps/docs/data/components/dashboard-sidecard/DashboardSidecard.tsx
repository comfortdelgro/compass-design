import {Card, DashboardSidecard} from '@comfortdelgro/react-compass'

const lorem = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
  corrupti esse qui earum dolorum nulla assumenda excepturi, a
  quibusdam rem eligendi vero hic, doloremque nam deserunt,
  consequuntur aut atque eveniet.
  `

const Default: React.FC = () => {
  return (
    <DashboardSidecard>
      <DashboardSidecard.Header>My header</DashboardSidecard.Header>
      <DashboardSidecard.Content>
        <Card size='lg'>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
          </Card.Body>
        </Card>
      </DashboardSidecard.Content>
      <DashboardSidecard.Content>
        <Card size='lg'>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
          </Card.Body>
        </Card>
      </DashboardSidecard.Content>
    </DashboardSidecard>
  )
}

export default Default
