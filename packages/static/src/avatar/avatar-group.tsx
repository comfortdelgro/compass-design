import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar, {AvatarProps} from '.'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {AvatarSize, OFFSET_LEFT_MAP} from './avatar.const'
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
        className={`${styles.avatarGroup}`}
        ref={avatarGroupRef}
        {...delegated}
      >
        {avatars.slice(0, display).map((avatar) => {
          if (React.isValidElement(avatar)) {
            return React.cloneElement(avatar, {
              size,
              style: {
                marginLeft: OFFSET_LEFT_MAP[size],
              },
            } as AvatarProps)
          }
          return avatar
        })}
        {display < avatars.length && (
          <Avatar
            label={`+${avatars.length - display}`}
            cutOffText={false}
            size={size}
            style={{
              marginLeft: OFFSET_LEFT_MAP[size],
            }}
          ></Avatar>
        )}
        {useAddMore && (
          <button
            className={`${styles.avatarAddMore} ${
              styles['addMoreSize' + capitalizeFirstLetter(size)]
            }`}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
      </div>
    )
  },
)

export default AvatarGroup
