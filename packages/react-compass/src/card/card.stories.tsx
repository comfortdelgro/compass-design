import {StoryDecorator} from '@ladle/react'
import React from 'react'
import Button from '../button/button'
import {Column} from '../utils/components'
import Card from './index'

const lorem = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`

export const Sizes: React.FC = () => {
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

export const Variants: React.FC = () => {
  const isDisabled = true

  return (
    <Column>
      <h3>Default</h3>
      <Card size='lg'>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
          <Card.Action>
            <Button variant='primary'>Button</Button>
            <Button variant='secondary'>Button</Button>
          </Card.Action>
        </Card.Body>
      </Card>
      <h3>Disabled</h3>
      <Card isDisabled={true} size='lg'>
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

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
