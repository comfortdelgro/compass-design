import {Avatar, Flexbox} from '@comfortdelgro/react-compass'

export default function ImageAvatars() {
  return (
    <Flexbox css={{justifyContent: 'center'}}>
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
