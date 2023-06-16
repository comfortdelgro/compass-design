import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'
import {StyledAvatar} from './avatar.styles'

export const StyledRing = styled('div', {
  transition: '$default',
  border: '2px solid $whiteText',
  borderRadius: '$full',
})

export const StyledAvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',

  variants: {
    variant: {
      contained: {
        [`& ${StyledAvatar}`]: {
          marginRight: '-$2',
          '&:hover': {
            marginTop: '-$4',
          },
        },
      },
      outlined: {
        [`& ${StyledRing}`]: {
          marginRight: '-$2',
          '&:hover': {
            marginTop: '-$4',
          },
        },
      },
    },
    disabledAnimation: {
      false: {},
      true: {
        [`& ${StyledAvatar}`]: {
          '&:hover': {
            marginTop: '0px',
          },
        },
      },
    },
  },
})

export type AvatarGroupVariantProps = VariantProps<typeof StyledAvatarGroup>
