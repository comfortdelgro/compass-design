import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'
import {blink} from './button.keyframes'

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

  '.dots span': {
    display: 'inline-block',
    flexShrink: 0,
    width: '.375em',
    height: '.375em',
    borderRadius: '$full',
    background: 'currentColor',
    animation: `${blink} 1.4s infinite both`,
  },

  '.dots span:nth-child(1)': {animationDelay: '0s'},
  '.dots span:nth-child(2)': {animationDelay: '0.2s'},
  '.dots span:nth-child(3)': {animationDelay: '0.4s'},
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
  '.children': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    isHaveIcon: {
      true: {
        justifyContent: 'space-between',
      },
      fasle: {},
    },
  },
})

export const StyledButton = styled('button', {
  textDecoration: 'none',
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
  '.children > svg': {
    width: '1.833125rem',
    height: '1.166875rem',
  },

  '&:disabled': {
    background: '$divider',
    color: '$disabledText',
    borderColor: '$divider',
    cursor: 'not-allowed',
  },
  '&:focus-visible': {
    outline: '1px solid $cdgBlue60',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
  },

  variants: {
    size: {
      lg: {
        fontSize: '$body2',
        padding: '$2 $5',
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
        width: '100px',
        background: '$cdgBlue',
        color: '$whiteText',
        borderColor: '$cdgBlue',
        '&.cdg-link-button:hover': {
          background: '$cdgBlue120',
          borderColor: '$cdgBlue120',
        },
        '&:hover:enabled': {
          background: '$cdgBlue120',
          borderColor: '$cdgBlue120',
        },
      },
      secondary: {
        background: 'transparent',
        color: '$cdgBlue',
        borderColor: '$cdgBlue',
        '&.cdg-link-button:hover': {
          color: '$cdgBlue100',
          background: '$cdgBlue10',
          borderColor: '$cdgBlue120',
        },
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
        '&.cdg-link-button:hover': {
          background: '$dangerBg',
          borderColor: '$dangerBg',
        },
        '&:hover:enabled': {
          background: '$dangerBg',
          borderColor: '$dangerBg',
        },
      },
      ghost: {
        background: 'transparent',
        color: '$typeHeading',
        borderColor: 'transparent',
        '&.cdg-link-button:hover': {
          color: '$cdgBlue',
          background: '$cdgBlue10',
        },
        '&:hover:enabled': {
          color: '$cdgBlue',
          background: '$cdgBlue10',
        },
      },
    },
    h5: {
      true: {
        borderRadius: '$lg',
        padding: '11px $6',
        fontSize: '$body2',
        fontWeight: '$bold',
        '&:disabled': {
          background: '$grayShades20',
          color: '$grayShades60',
          borderColor: '$grayShades20',
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
    isSquare: {
      true: {
        aspectRatio: '1 / 1',
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
    {
      variant: 'primary',
      h5: true,
      css: {
        background: '$blueShades100',
        color: '$whiteText',
        borderColor: '$grayShades20',
        '&.cdg-link-button:hover': {
          background: '$blueShades120',
          borderColor: '$grayShades20',
        },
        '&:hover:enabled': {
          background: '$blueShades120',
          borderColor: '$grayShades20',
        },
      },
    },
    {
      variant: 'secondary',
      h5: true,
      css: {
        background: 'transparent',
        color: '$blueShades100',
        borderColor: '$blueShades100',
        '&.cdg-link-button:hover': {
          color: '$blueShades120',
          background: '$grayShades10',
          borderColor: '$blueShades120',
        },
        '&:hover:enabled': {
          color: '$blueShades120',
          background: '$grayShades10',
          borderColor: '$blueShades120',
        },
      },
    },
    {
      variant: 'danger',
      h5: true,
      css: {
        background: 'transparent',
        color: '$dangerShades',
        borderColor: '$dangerShades',
        '&.cdg-link-button:hover': {
          background: '$grayShades10',
          borderColor: '$dangerShades',
        },
        '&:hover:enabled': {
          background: '$grayShades10',
          borderColor: '$dangerShades',
        },
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
