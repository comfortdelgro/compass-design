import React, {useRef} from 'react'
import {AvatarGroupVariantProps, StyledAvatarGroup} from './avatar-group.styles'
import {StyledAvatar} from './avatar.styles'

interface Props extends AvatarGroupVariantProps {
  display?: number
}
type HtmlDivProps = React.ComponentPropsWithoutRef<'div'>
type OmitList = keyof Props
export type AvatarGroupProps = Omit<HtmlDivProps, OmitList> & Props

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  display = 4,
  children,
  ...delegated
}) => {
  const variantProps = {} as AvatarGroupVariantProps
  const ref = useRef<HTMLDivElement>(null)
  const avatars = React.Children.toArray(children)

  return (
    <StyledAvatarGroup ref={ref} {...delegated} {...variantProps}>
      {avatars.slice(0, display).map((avatar) => avatar)}
      <StyledAvatar>
        <span className='initials'>+{avatars.length - display}</span>
      </StyledAvatar>
    </StyledAvatarGroup>
  )
}

export default AvatarGroup
