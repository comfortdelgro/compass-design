import {Avatar, Flexbox} from '@comfortdelgro/react-compass-old'

export function CustomAvatars() {
  return (
    <Flexbox css={{justifyContent: 'center'}}>
      <Avatar
        label='Albert Einstein'
        image='https://i.pravatar.cc/150?u=a0425e81423429026704d'
        size='lg'
        css={{opacity: '0.8', '&:hover': {opacity: '0.5', cursor: 'pointer'}}}
      />
    </Flexbox>
  )
}
export default CustomAvatars
