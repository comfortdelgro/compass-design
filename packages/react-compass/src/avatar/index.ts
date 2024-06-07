import _Avatar from './avatar'
import AvatarGroup from './avatar-group'

export type {AvatarProps} from './avatar'
export type {AvatarGroupProps} from './avatar-group'

const Avatar = _Avatar as typeof _Avatar & {Group: typeof AvatarGroup}

Avatar.Group = AvatarGroup

Avatar.Group.displayName = 'Avatar.Group'
Avatar.displayName = 'Avatar'

export default Avatar
