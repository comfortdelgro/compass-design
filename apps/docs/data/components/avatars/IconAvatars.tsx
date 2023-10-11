import {Avatar, Flexbox} from '@comfortdelgro/react-compass'
import BugIcon from '@comfortdelgro/compass-icons/react/bug'

export function IconAvatars() {
  return (
    <Flexbox css={{justifyContent: 'center'}}>
      <Avatar label='Albert Einstein' icon={<BugIcon />} size='lg' />
    </Flexbox>
  )
}
export default IconAvatars
