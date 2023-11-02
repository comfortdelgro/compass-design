import {Avatar, Flexbox} from '@comfortdelgro/react-compass'

export function LetterAvatars() {
  return (
    <Flexbox css={{justifyContent: 'center'}}>
      <Avatar label='Albert Einstein' size='lg' />

      <Avatar label='Adam Levine' size='lg' />

      <Avatar label='Dwane Johnson' size='lg' />
    </Flexbox>
  )
}
export default LetterAvatars
