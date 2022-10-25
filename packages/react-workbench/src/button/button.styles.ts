import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledButton = styled('button', {
  // font
  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',

  // border
  borderWidth: '$light',
  borderStyle: 'solid',
  borderRadius: '$md',

  cursor: 'pointer',

  '&:disabled': {
    background: '$divider',
    color: '$disabledText',
    borderColor: '$divider',
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      lg: {
        fontSize: '$body1',
        padding: '$2 $4',
      },
      md: {
        fontSize: '$body2',
        padding: '$1_5 $3',
      },
      sm: {
        fontSize: '$body3',
        padding: '$1 $2',
      },
    },
    variant: {
      primary: {
        background: '$cdgBlue',
        color: '$whiteText',
        borderColor: '$cdgBlue',
        '&:hover:enabled': {
          background: '$cdgBlue120',
          borderColor: '$cdgBlue120',
        },
      },
      secondary: {
        background: 'transparent',
        color: '$cdgBlue',
        borderColor: '$cdgBlue',
        '&:hover:enabled': {
          color: '$cdgBlue100',
          background: '$cdgBlue10',
          borderColor: '$cdgBlue120',
        },
      },
      danger: {
        background: 'transparent',
        color: '$danger',
        borderColor: '$danger',
        '&:hover:enabled': {
          background: '$dangerBg',
          borderColor: '$dangerBg',
        },
      },
      ghost: {
        background: 'transparent',
        color: '$cdgBlue',
        borderColor: 'transparent',
        '&:hover:enabled': {
          background: '$cdgBlue10',
        },
      },
    },
    block: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

export type ButtonVariantProps = VariantProps<typeof StyledButton>
