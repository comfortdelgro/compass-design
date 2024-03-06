import type {Meta} from '@storybook/react'
import React, {PropsWithChildren} from 'react'
import Card from './index'

const lorem = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`

const Container = (props: PropsWithChildren<unknown>) => {
  return (
    <div style={{padding: '1rem', backgroundColor: 'var(--cdg-color-gray10)'}}>
      {props.children}
    </div>
  )
}

const backgroundSrc =
  'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

export const Basic: React.FC = () => {
  return (
    <Container>
      <Card size='sm'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 4)}</p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export const Sizes = () => {
  return (
    <Container>
      <h3>Basic card small size</h3>
      <Card size='sm'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 5)}</p>
        </Card.Body>
      </Card>

      <h3>Basic card large size</h3>
      <Card size='lg'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>

      <h3>Basic card full size</h3>
      <Card size='full'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem}</p>
        </Card.Body>
      </Card>

      <h3>Basic card customized size</h3>
      <Card css={{maxWidth: '400px'}}>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem}</p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export const Variants = () => {
  return (
    <Container>
      <h3>Default</h3>
      <Card size='lg'>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
      <h3>Disabled</h3>
      <Card isDisabled={true} size='lg'>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
      <h3>Default - Shadowless</h3>
      <Card size='lg' isShadowless={true}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
      <h3>Clickable</h3>
      <Card size='lg' isShadowless={true} isClickable>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
      <h3>Disabled - Shadowless</h3>
      <Card isDisabled={true} size='lg' isShadowless={true}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export const Custom = () => {
  return (
    <Container>
      <Card size='sm'>
        <Card.Body css={{backgroundColor: 'var(--cdg-color-cdgBlue40)'}}>
          <Card.Title css={{fontSize: '1.5rem'}}>Card title</Card.Title>
          <p style={{margin: 0, fontSize: '1rem'}}>
            {lorem.slice(0, lorem.length / 4)}
          </p>
        </Card.Body>
      </Card>
    </Container>
  )
}

const meta = {
  title: 'Example/Card',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
