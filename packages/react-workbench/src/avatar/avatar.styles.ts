import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledAvatar = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  aspectRatio: '1 / 1',
  borderRadius: '$full',

  color: '$info',
  background: '$infoBg',
  userSelect: 'none',

  '.initials': {
    fontFamily: '$sans',
    fontSize: '$body2',
    fontWeight: '$semibold',
  },

  variants: {
    size: {
      lg: {
        width: '$12',
      },
      md: {
        width: '$10',
      },
      sm: {
        width: '$8',
      },
      xs: {
        width: '$6',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type AvatarVariantProps = VariantProps<typeof StyledAvatar>
