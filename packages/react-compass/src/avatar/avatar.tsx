import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import type AvatarAdd from './avatar-add'
import type AvatarGroup from './avatar-group'
import {
  AvatarVariantProps,
  StyledAvatar,
  StyledIndicator,
} from './avatar.styles'

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
  indicator?: React.ReactNode
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
    indicator,
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
      {indicator && <StyledIndicator size={size}>{indicator}</StyledIndicator>}
    </StyledAvatar>
  )
})

export default Avatar as typeof Avatar & {
  Group: typeof AvatarGroup
  Add: typeof AvatarAdd
}
