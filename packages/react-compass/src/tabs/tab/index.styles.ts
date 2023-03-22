import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledTab = styled('div', {
  position: 'relative',
  flexShrink: 0,

  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  fontSize: '$label1',

  cursor: 'pointer',
  userSelect: 'none',
  transition: '$Tabs',
  display: 'flex',
  alignItems: 'center',
  width: 'max-content',

  '&:focus-visible': {
    outline: 'none',
  },

  '& .icon': {
    width: '$4',
    height: '$4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black thin solid',
    borderRadius: '$full',
    backgroundColor: '$background',
    '& svg': {
      display: 'none',
    },
  },

  '&:hover': {
    '& .icon': {
      backgroundColor: '$background',
      '& path': {
        fill: '$cdgBlue140',
      },
    },
  },

  variants: {
    variant: {
      rounded: {
        display: 'flex',
        justifyContent: 'center',
        padding: '$2 $4',
        background: 'transparent',
        borderRadius: '$full',
        color: '$cdgBlue120',
        '&:hover': {
          background: '$cdgBlue140',
          color: '$whiteText',
        },
      },
      simple: {
        background: 'transparent',
        padding: '$2 0',
        '&:hover': {
          color: '$cdgBlue100',
          '& .icon': {
            backgroundColor: '$cdgBlue100',
            border: 'none',
            '& svg': {
              display: 'block',
              '& path': {
                fill: '$whiteText',
              },
            },
          },
        },
      },
    },
    disabled: {
      true: {
        background: 'transparent',
        color: '$gray50',
        cursor: 'not-allowed',
      },
    },
    active: {
      true: {
        color: '$whiteText',
        background: '$cdgBlue',
      },
    },
    icon: {
      none: {
        '& .icon': {
          display: 'none',
        },
      },
      left: {
        display: 'flex',
        flexDirection: 'row',
        '& .icon': {
          width: '$4',
          marginLeft: '$2',
        },
      },
      right: {
        display: 'flex',
        flexDirection: 'row-reverse',
        '& .icon': {
          width: '$4',
          marginRight: '$2',
        },
      },
      top: {
        display: 'flex',
        flexDirection: 'column-reverse',
        '& .icon': {
          width: '$4',
          marginBottom: '$2',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'simple',
      disabled: true,
      css: {
        background: 'transparent',
        '& .icon': {
          backgroundColor: '$gray50',
          border: 'none',
          display: 'flex',
          '& svg': {
            display: 'block',
            '& path': {
              fill: '$whiteText',
            },
          },
        },
        '&:hover': {
          background: 'transparent',
          color: '$gray50',
          '& .icon': {
            backgroundColor: '$gray50',
            border: 'none',
            display: 'flex',
            '& svg': {
              display: 'block',
              '& path': {
                fill: '$whiteText',
              },
            },
          },
        },
      },
    },
    {
      variant: 'simple',
      active: true,
      css: {
        color: '$cdgBlue100',
        marginBottom: '-2px',
        borderBottom: '$cdgBlue 2px solid',
      },
    },
    {
      variant: 'rounded',
      disabled: true,
      css: {
        color: '$gray50',
        backgroundColor: 'transparent',
        '&:hover': {
          color: '$gray50',
          backgroundColor: 'transparent',
        },
      },
    },
    {
      variant: 'rounded',
      active: true,
      css: {
        color: '$whiteText',
        backgroundColor: '$cdgBlue100',
        '& .icon': {
          backgroundColor: '$background',
          border: 'none',
          '& svg': {
            display: 'block',
            '& path': {
              fill: '$cdgBlue100',
            },
          },
        },
      },
    },
    {
      variant: 'simple',
      active: true,
      css: {
        backgroundColor: 'transparent',
        '& .icon': {
          backgroundColor: '$cdgBlue100',
          border: 'none',
          '& svg': {
            display: 'block',
            '& path': {
              fill: '$whiteText',
            },
          },
        },
      },
    },
    {
      variant: 'rounded',
      disabled: true,
      css: {
        '& .icon': {
          backgroundColor: '$gray50',
          border: 'none',
          display: 'flex',
          '& svg': {
            display: 'block',
            '& path': {
              fill: '$whiteText',
            },
          },
        },
        '&:hover': {
          '& .icon': {
            backgroundColor: '$gray50',
            '& path': {
              fill: '$whiteText',
            },
          },
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'rounded',
    disabled: false,
    icon: 'none',
  },
})

export type TabVariantProps = VariantProps<typeof StyledTab>
