import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {CSS} from '@stitches/react'
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
  css?: CSS
  label?: string
  icon?: IconProp
  image?: string
}
type HtmlSpanProps = React.ComponentPropsWithoutRef<'span'>
type OmitList = keyof Props | 'children'

export type AvatarProps = Omit<HtmlSpanProps, OmitList> & Props

const Avatar: React.FC<AvatarProps> = ({
  css = {},
  size,
  label,
  icon,
  image,
  ...delegated
}) => {
  const variantProps = {size} as AvatarVariantProps
  const ref = useRef<HTMLSpanElement>(null)

  return (
    <StyledAvatar ref={ref} css={css} {...delegated} {...variantProps}>
      {label ? (
        <span className='initials'>{calculateInitials(label, size)}</span>
      ) : null}
      {icon ? (
        <div className='icon-wrapper'>
          <FontAwesomeIcon className='icon' icon={icon} />
        </div>
      ) : null}
      {image ? (
        <img className='image' src={image} alt={label || 'Avatar'} />
      ) : null}
    </StyledAvatar>
  )
}

export default Avatar as typeof Avatar & {Group: typeof AvatarGroup}
