import {
  faCircleUser,
  faUser as faRegularUser,
} from '@fortawesome/free-regular-svg-icons'
import {Row} from '../utils/components'
import Avatar from './index'

const images = [
  'https://i.pravatar.cc/150?img=32',
  'https://i.pravatar.cc/150?img=31',
  'https://i.pravatar.cc/150?u=a048581f4e29026701d',
  'https://i.pravatar.cc/150?img=60',
  'https://i.pravatar.cc/150?u=a042581f4e29026704d',
] as const

export const Variants = () => (
  <>
    <h3>With Images</h3>

    <Row>
      <Avatar label='Albert Einstein' image={images[0]} size='lg' />
      <Avatar label='Albert Einstein' image={images[1]} size='md' />
      <Avatar label='Albert Einstein' image={images[2]} size='sm' />
      <Avatar label='Albert Einstein' image={images[3]} size='xs' />
    </Row>

    <h3>With Labels</h3>

    <Row>
      <Avatar label='Albert Einstein' size='lg' />
      <Avatar label='Albert Einstein' size='md' />
      <Avatar label='Albert Einstein' size='sm' />
      <Avatar label='Albert Einstein' size='xs' />
    </Row>

    <h3>With Icons</h3>

    <Row>
      <Avatar icon={faRegularUser} size='lg' />
      <Avatar icon={faRegularUser} size='md' />
      <Avatar icon={faRegularUser} size='sm' />
      <Avatar icon={faRegularUser} size='xs' />
    </Row>

    <h3>With both Label and Icon</h3>

    <Avatar label='Albert Einstein' icon={faCircleUser} size='md' />
  </>
)

export const Group = () => (
  <>
    <Avatar.Group display={7}>
      <Avatar label='Leonhard Euler' image={images[0]} />
      <Avatar label='Isaac Newton' image={images[1]} />
      <Avatar label='Alan Turing' image={images[2]} />
      <Avatar label='David Hilbert' image={images[3]} />
      <Avatar label='Edwin Hubble' image={images[4]} />
      <Avatar label='Ada Lovelace' image={images[0]} />
      <Avatar label='Max Planck' image={images[1]} />
    </Avatar.Group>
  </>
)
