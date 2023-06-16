import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledAvatarAdd = styled('button', {
  aspectRatio: '1 / 1',
  borderRadius: '$full',
  border: '1px dashed $gray70',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',

  '&::before': {
    content: '',
    position: 'absolute',
    borderRadius: '$full',
    backgroundColor: '$whiteText',
    width: 'calc($12 - 1px)',
    height: 'calc($12 - 1px)',
    zIndex: -1,
  },

  variants: {
    disabled: {
      true: {
        '&::before': {
          backgroundColor: '#BCBCBC',
        },
      },
      false: {
        '&:hover': {
          boxShadow: '0px 0px 0px 2px #7095D2',
        },
      },
    },
    size: {
      lg: {
        width: '$12',
        height: '$12',
        '&::before': {
          width: 'calc($12 - 1px)',
          height: 'calc($12 - 1px)',
        },
      },
      md: {
        width: '$10',
        height: '$10',
        '&::before': {
          width: 'calc($10 - 1px)',
          height: 'calc($10 - 1px)',
        },
      },
      sm: {
        width: '$8',
        height: '$8',
        '&::before': {
          width: 'calc($8 - 1px)',
          height: 'calc($8 - 1px)',
        },
      },
      xs: {
        width: '$6',
        height: '$6',
        '&::before': {
          width: 'calc($6 - 1px)',
          height: 'calc($6 - 1px)',
        },
      },
    },
  },
})

export type AvatarAddVariantProps = VariantProps<typeof StyledAvatarAdd>
