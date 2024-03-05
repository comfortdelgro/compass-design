import {Meta} from '@storybook/react'
import React from 'react'

import Typography from './index'

const text = 'The quick fox'

export const Display: React.FC = () => (
  <div>
    <Typography.Display variant='display1' title='display'>
      {text}
    </Typography.Display>
    <Typography.Display variant='display2'>{text}</Typography.Display>
    <Typography.Display variant='display3'>{text}</Typography.Display>
  </div>
)

export const Header: React.FC = () => (
  <div>
    <Typography.Header variant='header0' title='header'>
      {text}
    </Typography.Header>
    <Typography.Header variant='header1'>{text}</Typography.Header>
    <Typography.Header variant='header2'>{text}</Typography.Header>
    <Typography.Header variant='header3'>{text}</Typography.Header>
    <Typography.Header variant='header4'>{text}</Typography.Header>
    <Typography.Header variant='header5'>{text}</Typography.Header>
  </div>
)

export const Body: React.FC = () => (
  <div>
    <Typography.Body variant='body1' title='body1'>
      {text}
    </Typography.Body>
    <Typography.Body variant='body1' weight='semibold'>
      {text}
    </Typography.Body>
    <Typography.Body variant='body1' weight='bold'>
      {text}
    </Typography.Body>
    <Typography.Body variant='body2'>{text}</Typography.Body>
    <Typography.Body variant='body2' weight='semibold'>
      {text}
    </Typography.Body>
    <Typography.Body variant='body2' weight='bold'>
      {text}
    </Typography.Body>
    <Typography.Body variant='body3'>{text}</Typography.Body>
    <Typography.Body variant='body3' weight='semibold'>
      {text}
    </Typography.Body>
    <Typography.Body variant='body3' weight='bold'>
      {text}
    </Typography.Body>
  </div>
)

export const Label: React.FC = () => (
  <div>
    <Typography.Label variant='label1' title='label'>
      {text}
    </Typography.Label>
    <br />
    <Typography.Label variant='label1' weight='semibold'>
      {text}
    </Typography.Label>
    <br />
    <Typography.Label variant='label1' weight='bold'>
      {text}
    </Typography.Label>
    <br />
    <Typography.Label variant='label1' weight='light'>
      {text}
    </Typography.Label>
    <br />
    <Typography.Label variant='label2'>{text}</Typography.Label>
    <br />
    <Typography.Label variant='label2' weight='semibold'>
      {text}
    </Typography.Label>
    <br />
    <Typography.Label variant='label2' weight='bold'>
      {text}
    </Typography.Label>
    <br />
    <Typography.Label variant='label2' weight='light'>
      {text}
    </Typography.Label>
    <br />
    <Typography.Label variant='label3'>{text}</Typography.Label>
    <br />
    <Typography.Label variant='label3' weight='semibold'>
      {text}
    </Typography.Label>
    <br />
    <Typography.Label variant='label3' weight='bold'>
      {text}
    </Typography.Label>
    <br />
    <Typography.Label variant='label3' weight='light'>
      {text}
    </Typography.Label>
  </div>
)

export const Link: React.FC = () => (
  <div>
    <Typography.Link variant='link1' title='label'>
      {text}
    </Typography.Link>
    <br />
    <Typography.Link variant='link2'>{text}</Typography.Link>
    <br />
    <Typography.Link variant='link3'>{text}</Typography.Link>
    <br />
    <Typography.Link variant='link3' weight='bold'>
      {text}
    </Typography.Link>
  </div>
)

const meta = {
  title: 'Example/Typography',
  component: Link,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Link>

export default meta
