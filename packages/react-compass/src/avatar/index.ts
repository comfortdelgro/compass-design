import Avatar from './avatar'
import AvatarGroup from './avatar-group'

export type {AvatarProps} from './avatar'
export type {AvatarGroupProps} from './avatar-group'

Avatar.Group = AvatarGroup

Avatar.Group.displayName = 'Avatar.Group'
Avatar.displayName = 'Avatar'

export default Avatar
