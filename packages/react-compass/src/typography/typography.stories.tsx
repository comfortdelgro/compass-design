import {Column} from '../utils/components'
import Typography from './index'

const text = 'The quick fox'

export const Display: React.FC = () => (
  <Column>
    <Typography.Display variant='display1'>{text}</Typography.Display>
    <Typography.Display variant='display2'>{text}</Typography.Display>
    <Typography.Display variant='display3'>{text}</Typography.Display>
  </Column>
)

export const Header: React.FC = () => (
  <Column>
    <Typography.Header variant='header0'>{text}</Typography.Header>
    <Typography.Header variant='header1'>{text}</Typography.Header>
    <Typography.Header variant='header2'>{text}</Typography.Header>
    <Typography.Header variant='header3'>{text}</Typography.Header>
    <Typography.Header variant='header4'>{text}</Typography.Header>
    <Typography.Header variant='header5'>{text}</Typography.Header>
  </Column>
)

export const Body: React.FC = () => (
  <Column>
    <Typography.Body variant='body1'>{text}</Typography.Body>
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
  </Column>
)

export const Label: React.FC = () => (
  <Column>
    <Typography.Label variant='label1'>{text}</Typography.Label>
    <Typography.Label variant='label1' weight='semibold'>
      {text}
    </Typography.Label>
    <Typography.Label variant='label1' weight='bold'>
      {text}
    </Typography.Label>
    <Typography.Label variant='label1' weight='light'>
      {text}
    </Typography.Label>
    <Typography.Label variant='label2'>{text}</Typography.Label>
    <Typography.Label variant='label2' weight='semibold'>
      {text}
    </Typography.Label>
    <Typography.Label variant='label2' weight='bold'>
      {text}
    </Typography.Label>
    <Typography.Label variant='label2' weight='light'>
      {text}
    </Typography.Label>
    <Typography.Label variant='label3'>{text}</Typography.Label>
    <Typography.Label variant='label3' weight='semibold'>
      {text}
    </Typography.Label>
    <Typography.Label variant='label3' weight='bold'>
      {text}
    </Typography.Label>
    <Typography.Label variant='label3' weight='light'>
      {text}
    </Typography.Label>
  </Column>
)

export const Link: React.FC = () => (
  <Column>
    <Typography.Link variant='link1'>{text}</Typography.Link>
    <Typography.Link variant='link2'>{text}</Typography.Link>
    <Typography.Link variant='link3'>{text}</Typography.Link>
    <Typography.Link variant='link3' weight='semibold'>
      {text}
    </Typography.Link>
  </Column>
)
