import {Avatar, Flexbox} from '@comfortdelgro/react-compass'

export default function GroupAvatars() {
  const images = [
    'https://i.pravatar.cc/150?img=32',
    'https://i.pravatar.cc/150?img=31',
    'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    'https://i.pravatar.cc/150?img=60',
    'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  ] as const
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Avatar.Group display={5} size='md' disabledAnimation>
        <Avatar label='Leonhard Euler' image={images[0]} size='md' />
        <Avatar label='Isaac Newton' image={images[1]} size='md' />
        <Avatar label='Alan Turing' image={images[2]} size='md' />
        <Avatar label='David Hilbert' image={images[3]} size='md' />
        <Avatar label='Edwin Hubble' image={images[4]} size='md' />
        <Avatar label='Ada Lovelace' image={images[0]} size='md' />
        <Avatar label='Max Planck' image={images[1]} size='md' />
      </Avatar.Group>
    </Flexbox>
  )
}
