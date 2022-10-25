import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledAlert = styled('div', {
  fontFamily: '$sans',
  padding: '$2 $4',
  borderRadius: '$md',

  variants: {
    color: {
      info: {
        background: '$infoBg',
      },
      success: {
        background: '$successBg',
      },
      danger: {
        background: '$dangerBg',
      },
      warning: {
        background: '$warningBg',
      },
    },
  },
})

export type AlertVariantProps = VariantProps<typeof StyledAlert>
