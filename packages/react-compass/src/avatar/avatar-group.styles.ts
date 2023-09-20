import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'
import {StyledAvatar} from './avatar.styles'

export const StyledAvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',

  [`& ${StyledAvatar}`]: {
    marginRight: '-$3',
    '&:hover': {
      marginTop: '-$4',
    },
  },

  variants: {
    size: {
      lg: {},
      md: {},
      sm: {},
      xs: {},
      xxs: {
        [`& ${StyledAvatar}`]: {
          marginRight: '-$2',
        },
      },
    },
    disabledAnimation: {
      false: {},
      true: {
        [`& ${StyledAvatar}`]: {
          marginRight: '-$3',
          '&:hover': {
            marginTop: '0px',
          },
        },
      },
    },
  },
})

export type AvatarGroupVariantProps = VariantProps<typeof StyledAvatarGroup>
