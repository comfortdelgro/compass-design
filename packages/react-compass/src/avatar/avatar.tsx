import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {AVATAR_SIZE_MAP, AvatarSize} from './avatar.const'
import styles from './styles/avatar.module.css'
import AvatarGroup from './avatar-group'

const calculateInitials = (name: string, size: AvatarSize) => {
  const initials = name
    .toUpperCase()
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, size === 'sm' || size === 'xs' || size === 'xxs' ? 1 : 2)

  return initials
}

interface Props {
  label?: string
  icon?: React.ReactNode
  image?: string
  css?: CSS
  size?: AvatarSize
  className?: string
  cutOffText?: boolean
  status?: React.ReactElement
}

export type AvatarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    label,
    icon,
    image,
    // VariantProps
    size = 'md',
    className,
    // html attribute
    style,
    status,
    cutOffText = true,
    ...htmlProps
  } = props

  const avatarRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={avatarRef}>
      <div
        {...htmlProps}
        className={classNames(
          styles.avatar,
          AVATAR_SIZE_MAP[size],
          className,
          'cdg-avatar',
        )}
        style={style}
      >
        <div className={classNames(styles.avatarInner, 'cdg-avatar-inner')}>
          {label ? (
            <span className={classNames(styles.avatarText, 'cdg-avatar-text')}>
              {(cutOffText && calculateInitials(label, size)) || label}
            </span>
          ) : null}
          {icon ? (
            <div className={classNames(styles.avatarIcon, 'cdg-avatar-icon')}>
              {icon}
            </div>
          ) : null}
          {image ? (
            <img
              className={classNames(styles.avatarImage, 'cdg-avatar-image')}
              src={image}
              alt={label || 'Avatar'}
            />
          ) : null}
        </div>
        {status
          ? {
              ...status,
              props: {...status.props, className: styles.avatarStatus},
            }
          : null}
      </div>
    </CssInjection>
  )
}) as typeof Avatar & {Group: typeof AvatarGroup}

export default Avatar
