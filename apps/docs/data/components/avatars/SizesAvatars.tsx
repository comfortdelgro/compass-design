import {Avatar, Flexbox} from '@comfortdelgro/react-compass-old'

export function SizeAvatars() {
  return (
    <Flexbox css={{justifyContent: 'center'}}>
      <Avatar
        label='Albert Einstein'
        image='https://i.pravatar.cc/150?img=32'
        size='xs'
      />

      <Avatar
        label='Albert Einstein'
        image='https://i.pravatar.cc/150?img=31'
        size='sm'
      />

      <Avatar
        label='Albert Einstein'
        image='https://i.pravatar.cc/150?img=60'
        size='md'
      />
      <Avatar
        label='Albert Einstein'
        image='https://i.pravatar.cc/150?u=a042581f4e29026704d'
        size='lg'
      />
    </Flexbox>
  )
}
export default SizeAvatars
