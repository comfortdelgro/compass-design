import React from 'react'
import Avatar, {AvatarProps} from '.'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter, classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {AvatarSize, OFFSET_LEFT_MAP} from './avatar.const'
import styles from './styles/avatar.module.css'

interface Props {
  display?: number
  children?: React.ReactNode
  size?: AvatarSize
  disabledAnimation?: boolean
  useAddMore?: boolean
  css?: CSS
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
      // disabledAnimation = false,
      useAddMore = false,
      ...delegated
    } = props

    const avatarGroupRef = useDOMRef<HTMLDivElement>(ref)
    const avatars = React.Children.toArray(children)

    return (
      <CssInjection css={css} childrenRef={avatarGroupRef}>
        <div
          className={classNames(styles.avatarGroup, 'cdg-avatar-group')}
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
              className={classNames(
                styles.avatarAddMore,
                styles['addMoreSize' + capitalizeFirstLetter(size)],
                'cdg-avatar-group-addmore',
              )}
            >
              <svg viewBox='0 0 448 512' width={20}>
                <path
                  fill='currentColor'
                  d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'
                ></path>
              </svg>
            </button>
          )}
        </div>
      </CssInjection>
    )
  },
)

export default AvatarGroup
