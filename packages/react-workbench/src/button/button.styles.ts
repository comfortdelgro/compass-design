import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'
import {StyledLoading} from './loading.styles'

export const StyledButton = styled('button', {
  position: 'relative',
  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderRadius: '$md',
  cursor: 'pointer',
  transition: '$button',

  '.left-icon, .right-icon': {
    width: '$4',
    height: '$4',
  },

  '.left-icon-wrapper': {
    marginRight: '$2',
  },

  '.right-icon-wrapper': {
    marginLeft: '$2',
  },

  '.loading-wrapper': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'wait',
  },

  '&:disabled': {
    background: '$divider',
    color: '$disabledText',
    borderColor: '$divider',
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      lg: {
        fontSize: '$body2',
        padding: '$2 $6',

        [`${StyledLoading}`]: {
          height: 'calc(1.5*$4)',
        },
      },
      md: {
        fontSize: '$body3',
        padding: '$1_5 $4',

        [`${StyledLoading}`]: {
          height: 'calc(1.5*$3_5)',
        },
      },
      sm: {
        fontSize: '$label2',
        padding: '$1 $2_5',

        [`${StyledLoading}`]: {
          height: 'calc(1.5*$3)',
        },
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
        color: '$typeHeading',
        borderColor: 'transparent',
        '&:hover:enabled': {
          color: '$cdgBlue',
          background: '$cdgBlue10',
        },
      },
    },
    block: {
      true: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    loading: {
      true: {
        '.loading-wrapper': {
          display: 'flex',
        },
        '.content-wrapper': {
          visibility: 'hidden',
        },
      },
    },
    iconOnly: {
      true: {},
    },
  },
  compoundVariants: [
    {
      size: 'lg',
      iconOnly: true,
      css: {
        height: 'calc((1.5*$4) + (2*$2))',
        aspectRatio: '1 / 1',
        padding: 0,
      },
    },
    {
      size: 'md',
      iconOnly: true,
      css: {
        height: 'calc((1.5*$3_5) + (2*$1_5))',
        aspectRatio: '1 / 1',
        padding: 0,
      },
    },
    {
      size: 'sm',
      iconOnly: true,
      css: {
        height: 'calc((1.5*$3) + (2*$1))',
        aspectRatio: '1 / 1',
        padding: 0,
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
    iconOnly: false,
  },
})

export type ButtonVariantProps = VariantProps<typeof StyledButton>
