import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import type AvatarGroup from './avatar-group'
import {AVATAR_SIZE_MAP, AvatarSize} from './avatar.const'
import styles from './styles/avatar.module.css'

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
  css?: React.CSSProperties
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
    size = '',
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
        className={`cdg-avatar ${styles.avatar} ${AVATAR_SIZE_MAP[size]} ${
          className ? className : ''
        } `}
        style={style}
      >
        <div className={`cdg-avatar-inner ${styles.avatarInner}`}>
          {label ? (
            <span className={`cdg-avatar-text ${styles.avatarText}`}>
              {(cutOffText && calculateInitials(label, size)) || label}
            </span>
          ) : null}
          {icon ? (
            <div className={`cdg-avatar-icon ${styles.avatarIcon}`}>{icon}</div>
          ) : null}
          {image ? (
            <img
              className={`cdg-avatar-image ${styles.avatarImage}`}
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
})

export default Avatar as typeof Avatar & {Group: typeof AvatarGroup}
