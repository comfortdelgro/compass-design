import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import type AvatarGroup from './avatar-group'
import {AvatarVariantProps, StyledAvatar} from './avatar.styles'

const calculateInitials = (name: string, size: AvatarVariantProps['size']) => {
  const initials = name
    .toUpperCase()
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, size === 'sm' || size === 'xs' ? 1 : 2)

  return initials
}

interface Props extends StyledComponentProps {
  label?: string
  icon?: React.ReactNode
  image?: string
}

export type AvatarProps = Props &
  AvatarVariantProps &
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
    // html attribute
    ...delegates
  } = props

  const variantProps = {size} as AvatarVariantProps
  const avatarRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledAvatar css={css} ref={avatarRef} {...variantProps} {...delegates}>
      {label ? (
        <span className='initials'>{calculateInitials(label, size)}</span>
      ) : null}
      {icon ? <div className='icon-wrapper'>{icon}</div> : null}
      {image ? (
        <img className='image' src={image} alt={label || 'Avatar'} />
      ) : null}
    </StyledAvatar>
  )
})

export default Avatar as typeof Avatar & {Group: typeof AvatarGroup}
