import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {AvatarSize, sizeMap} from './avatar.const'
import styles from './styles/avatar.module.css'

interface Props {
  display?: number
  children?: React.ReactNode
  size?: AvatarSize
  disabledAnimation?: boolean
  css?: unknown
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
      ...delegated
    } = props

    const avatarGroupRef = useDOMRef<HTMLDivElement>(ref)
    const avatars = React.Children.toArray(children)

    return (
      <div
        className={`${styles.avatarGroup} ${sizeMap[size]}`}
        ref={avatarGroupRef}
        {...delegated}
      >
        {children}
      </div>
    )
  },
)

export default AvatarGroup
