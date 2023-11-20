import BugIcon from '@comfortdelgro/compass-icons/react/bug'
import {Avatar, Flexbox} from '@comfortdelgro/react-compass-old'

export function IconAvatars() {
  return (
    <Flexbox css={{justifyContent: 'center'}}>
      <Avatar label='Albert Einstein' icon={<BugIcon />} size='lg' />
    </Flexbox>
  )
}
export default IconAvatars
