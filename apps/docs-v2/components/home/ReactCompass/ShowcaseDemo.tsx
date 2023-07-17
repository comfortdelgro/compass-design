import {Button, Card} from '@comfortdelgro/react-compass'

export const componentCode = `
<Card size='lg'>
  <Card.Image src='https://picsum.photos/600/800' />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti
    esse qui earum dolorum nulla assum
    <Card.Action>
      <Button variant='primary'>Button</Button>
      <Button variant='secondary'>Button</Button>
    </Card.Action>
  </Card.Body>
</Card>
`

export default function ShowcaseDemo() {
  return (
    <Card size='lg'>
      <Card.Image src='https://picsum.photos/600/800' />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti
        esse qui earum dolorum nulla assum
        <Card.Action>
          <Button variant='primary'>Button</Button>
          <Button variant='secondary'>Button</Button>
        </Card.Action>
      </Card.Body>
    </Card>
  )
}
