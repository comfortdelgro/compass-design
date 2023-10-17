import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar from '.'
import {useDOMRef} from '../utils/use-dom-ref'
import {AVATAR_SIZE_MAP, AvatarSize} from './avatar.const'
import styles from './styles/avatar.module.css'

interface Props {
  display?: number
  children?: React.ReactNode
  size?: AvatarSize
  disabledAnimation?: boolean
  useAddMore?: boolean
  css?: unknown
  onAddMoreClick?: () => void
}

export type AvatarGroupProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      display = 4,
      children,
      size = 'md',
      disabledAnimation = false,
      useAddMore = false,
      ...delegated
    } = props

    const avatarGroupRef = useDOMRef<HTMLDivElement>(ref)
    const avatars = React.Children.toArray(children)

    return (
      <div
        className={`${styles.avatarGroup} ${AVATAR_SIZE_MAP[size]}`}
        ref={avatarGroupRef}
        {...delegated}
      >
        {avatars.slice(0, display).map((avatar) => avatar)}
        {display < avatars.length && (
          <Avatar
            label={`+${avatars.length - display}`}
            cutOffText={false}
          ></Avatar>
        )}
        {useAddMore && (
          <button className={styles.avatarAddMore}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
      </div>
    )
  },
)

export default AvatarGroup
