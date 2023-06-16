import Avatar from './avatar'
import AvatarAdd from './avatar-add'
import AvatarGroup from './avatar-group'

export type {AvatarProps} from './avatar'
export type {AvatarAddProps} from './avatar-add'
export type {AvatarGroupProps} from './avatar-group'

Avatar.Group = AvatarGroup
Avatar.Add = AvatarAdd

Avatar.Add.displayName = 'Avatar.Add'
Avatar.Group.displayName = 'Avatar.Group'
Avatar.displayName = 'Avatar'

export default Avatar
