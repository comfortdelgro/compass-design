import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import type AvatarGroup from './avatar-group'
import {AvatarSize, sizeMap} from './avatar.const'
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
    ...delegates
  } = props

  const avatarRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={avatarRef}>
      <div
        className={`${styles.avatar} ${className ? className : ''} ${
          sizeMap[size]
        }`}
        style={style}
      >
        {label ? (
          <span className={styles.avatarText}>
            {calculateInitials(label, size)}
          </span>
        ) : null}
        {icon ? <div className={styles.avatarIcon}>{icon}</div> : null}
        {image ? (
          <img
            className={styles.avatarImage}
            src={image}
            alt={label || 'Avatar'}
          />
        ) : null}
      </div>
    </CssInjection>
  )
})

export default Avatar as typeof Avatar & {Group: typeof AvatarGroup}
