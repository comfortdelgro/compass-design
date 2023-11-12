import {Avatar, Flexbox} from '@comfortdelgro/react-compass-old'

export default function ImageAvatars() {
  return (
    <Flexbox css={{justifyContent: 'center'}}>
      <Avatar
        label='Albert Einstein'
        image='https://i.pravatar.cc/150?img=32'
        size='lg'
      />
      <Avatar
        label='Albert Einstein'
        image='https://i.pravatar.cc/150?img=31'
        size='lg'
      />
      <Avatar
        label='Albert Einstein'
        image='https://i.pravatar.cc/150?img=60'
        size='lg'
      />
    </Flexbox>
  )
}
