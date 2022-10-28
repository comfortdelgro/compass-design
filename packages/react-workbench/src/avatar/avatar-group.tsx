import type {CSS} from '@stitches/react'
import React, {useRef} from 'react'
import {AvatarGroupVariantProps, StyledAvatarGroup} from './avatar-group.styles'
import {StyledAvatar} from './avatar.styles'

interface Props extends AvatarGroupVariantProps {
  css?: CSS
  display?: number
}
type HtmlDivProps = React.ComponentPropsWithoutRef<'div'>
type OmitList = keyof Props
export type AvatarGroupProps = Omit<HtmlDivProps, OmitList> & Props

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  css = {},
  display = 4,
  children,
  ...delegated
}) => {
  const variantProps = {} as AvatarGroupVariantProps
  const ref = useRef<HTMLDivElement>(null)
  const avatars = React.Children.toArray(children)

  return (
    <StyledAvatarGroup ref={ref} css={css} {...delegated} {...variantProps}>
      {avatars.slice(0, display).map((avatar) => avatar)}
      <StyledAvatar>
        <span className='initials count'>+{avatars.length - display}</span>
      </StyledAvatar>
    </StyledAvatarGroup>
  )
}

export default AvatarGroup
