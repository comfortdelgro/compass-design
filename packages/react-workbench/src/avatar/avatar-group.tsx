import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {AvatarGroupVariantProps, StyledAvatarGroup} from './avatar-group.styles'
import {StyledAvatar} from './avatar.styles'

interface Props extends StyledComponentProps {
  display?: number
}

export type AvatarGroupProps = Props & AvatarGroupVariantProps

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      display = 4,
      children,
    } = props

    const avatarGroupRef = useDOMRef<HTMLDivElement>(ref)
    const avatars = React.Children.toArray(children)

    return (
      <StyledAvatarGroup css={css} ref={avatarGroupRef}>
        {avatars.slice(0, display).map((avatar) => avatar)}
        <StyledAvatar>
          <span className='initials count'>+{avatars.length - display}</span>
        </StyledAvatar>
      </StyledAvatarGroup>
    )
  },
)

export default AvatarGroup
