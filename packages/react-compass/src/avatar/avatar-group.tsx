import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  AvatarGroupVariantProps,
  StyledAvatarGroup,
  StyledRing,
} from './avatar-group.styles'
import {StyledAvatar} from './avatar.styles'

interface Props extends StyledComponentProps {
  display?: number
  children?: React.ReactNode
  size?: 'lg' | 'md' | 'sm' | 'xs'
  variant?: 'contained' | 'outlined'
  disabledAnimation?: boolean
}

export type AvatarGroupProps = Props &
  AvatarGroupVariantProps &
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
      variant = 'contained',
      disabledAnimation = false,
      ...delegated
    } = props

    const avatarGroupRef = useDOMRef<HTMLDivElement>(ref)
    const avatars = React.Children.toArray(children)

    const determineFontSize = () => {
      if (size == 'lg' || size == 'md') return '1rem'
      if (size == 'sm' && avatars.length - display > 9) return '0.8rem'
      if (size == 'xs' && avatars.length - display < 10) return '0.8rem'
      if (size == 'xs' && avatars.length - display > 9) return '0.5rem'
      return '1rem'
    }

    return (
      <StyledAvatarGroup
        css={css}
        ref={avatarGroupRef}
        variant={variant}
        disabledAnimation={disabledAnimation}
        {...delegated}
      >
        {avatars.slice(0, display).map((avatar, index) => {
          return variant === 'outlined' ? (
            <StyledRing
              css={{
                zIndex: index,
              }}
            >
              {avatar}
            </StyledRing>
          ) : (
            avatar
          )
        })}
        {display < avatars.length && variant === 'outlined' ? (
          <StyledRing
            css={{
              zIndex: display,
            }}
          >
            <StyledAvatar
              size={size}
              css={{
                '.initials': {fontSize: determineFontSize()},
                zIndex: display,
              }}
            >
              <span className='initials count'>
                +{avatars.length - display}
              </span>
            </StyledAvatar>
          </StyledRing>
        ) : (
          <StyledAvatar
            size={size}
            css={{
              '.initials': {fontSize: determineFontSize()},
            }}
          >
            <span className='initials count'>+{avatars.length - display}</span>
          </StyledAvatar>
        )}
      </StyledAvatarGroup>
    )
  },
)

export default AvatarGroup
