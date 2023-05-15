import {keyframes} from '@stitches/react'
import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'
import {blink} from './button.keyframes'

const ripple = keyframes({
  to: {
    transform: 'scale(4)',
    opacity: 0,
  },
})

export const StyledLoading = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'wait',

  '.dots': {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
  },

  '.dots i': {
    display: 'inline-block',
    flexShrink: 0,
    width: '.375em',
    height: '.375em',
    borderRadius: '$full',
    background: 'currentColor',
    animation: `${blink} 1.4s infinite both`,
  },

  '.dots i:nth-child(1)': {animationDelay: '0s'},
  '.dots i:nth-child(2)': {animationDelay: '0.2s'},
  '.dots i:nth-child(3)': {animationDelay: '0.4s'},
})

export const StyledButtonContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  flexShrink: 0,

  '.icon': {
    width: '$4',
    height: '$4',
  },

  '.icon.left': {
    marginRight: '$2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '.icon.right': {
    marginLeft: '$2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const StyledButton = styled('button', {
  position: 'relative',
  flexShrink: 0,

  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',

  borderWidth: '$light',
  borderStyle: 'solid',
  borderRadius: '$md',

  cursor: 'pointer',
  transition: '$button',

  [`${StyledLoading}`]: {
    display: 'none',
  },

  [`${StyledButtonContent}`]: {
    visibility: 'visible',
  },

  '&:disabled': {
    background: '$divider',
    color: '$disabledText',
    borderColor: '$divider',
    cursor: 'not-allowed',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
  },

  '& .ripple': {
    position: 'absolute',
    borderRadius: '50%',
    transform: `scale(0)`,
    animation: `${ripple} 600ms linear`,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  variants: {
    size: {
      lg: {
        fontSize: '$body2',
        padding: '$2 $6',
      },
      md: {
        fontSize: '$body3',
        padding: '$1_5 $4',
      },
      sm: {
        fontSize: '$label2',
        padding: '$1 $2_5',
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
    fullWidth: {
      true: {
        width: '100%',

        [`${StyledButtonContent}`]: {
          '.children': {
            flexGrow: 1,
          },
        },
      },
    },
    loading: {
      true: {
        [`${StyledLoading}`]: {
          display: 'flex',
        },
        [`${StyledButtonContent}`]: {
          visibility: 'hidden',
        },
      },
    },
    iconOnly: {
      true: {
        aspectRatio: '1 / 1',
        padding: 0,

        [`${StyledButtonContent}`]: {
          '.children': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      size: 'lg',
      iconOnly: true,
      css: {
        height: 'calc((1.5*$4) + (2*$2))',
      },
    },
    {
      size: 'md',
      iconOnly: true,
      css: {
        height: 'calc((1.5*$3_5) + (2*$1_5))',
      },
    },
    {
      size: 'sm',
      iconOnly: true,
      css: {
        height: 'calc((1.5*$3) + (2*$1))',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
    fullWidth: false,
    loading: false,
    iconOnly: false,
  },
})

export type ButtonVariantProps = VariantProps<typeof StyledButton>
