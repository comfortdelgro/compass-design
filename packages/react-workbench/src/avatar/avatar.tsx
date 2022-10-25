import React, {useRef} from 'react'
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

interface Props extends AvatarVariantProps {
  label?: string
  image?: string
  icon?: string
}
type HtmlSpanProps = React.ComponentPropsWithoutRef<'span'>
type OmitList = keyof Props | 'children'

export type AvatarProps = Omit<HtmlSpanProps, OmitList> & Props

const Avatar: React.FC<AvatarProps> = ({size, label, ...delegated}) => {
  const variantProps = {size} as AvatarVariantProps
  const ref = useRef<HTMLSpanElement>(null)

  return (
    <StyledAvatar ref={ref} {...delegated} {...variantProps}>
      {label ? (
        <span className='initials'>{calculateInitials(label, size)}</span>
      ) : null}
    </StyledAvatar>
  )
}

export default Avatar as typeof Avatar & {Group: typeof AvatarGroup}
