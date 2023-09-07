import {Column, Typography} from '@comfortdelgro/react-compass'

const text = 'The quick fox'

const Display: React.FC = () => (
  <Column>
    <Typography.Header>Display</Typography.Header>
    <Typography.Display variant='display1' title='display'>
      {text}
    </Typography.Display>
    <Typography.Display variant='display2'>{text}</Typography.Display>
    <Typography.Display variant='display3'>{text}</Typography.Display>
    <Typography.Header>Header</Typography.Header>
    <Typography.Header variant='header0' title='header'>
      {text}
    </Typography.Header>
    <Typography.Header variant='header1'>{text}</Typography.Header>
    <Typography.Header variant='header2'>{text}</Typography.Header>
    <Typography.Header variant='header3'>{text}</Typography.Header>
    <Typography.Header variant='header4'>{text}</Typography.Header>
    <Typography.Header variant='header5'>{text}</Typography.Header>
    <Typography.Header>Body</Typography.Header>
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
    <Typography.Header>Label</Typography.Header>
    <Typography.Label variant='label1' title='label'>
      {text}
    </Typography.Label>
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
    <Typography.Header>Label</Typography.Header>
    <Typography.Link variant='link1' title='label'>
      {text}
    </Typography.Link>
    <Typography.Link variant='link2'>{text}</Typography.Link>
    <Typography.Link variant='link3'>{text}</Typography.Link>
    <Typography.Link variant='link3' weight='semibold'>
      {text}
    </Typography.Link>
  </Column>
)

export default Display
