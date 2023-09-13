import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledBadge = styled('div', {
  fontFamily: '$sans',
  fontWeight: '$semibold',
  padding: '$1 $3',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: '$full',
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  gap: '$2',

  '& > .icon': {
    height: '100%',
    width: '$3_5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    svg: {
      height: '$3',
      width: '100%',
    },
  },

  '& > .label': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },

  variants: {
    color: {
      info: {},
      success: {},
      danger: {},
      warning: {},
    },
    variant: {
      primary: {},
      secondary: {},
      outline: {},
      h5: {
        background: '$background',
        color: '$grayShades100',
        borderColor: '$blueShades80',
        padding: '3px $2 3px 3px',
        fontSize: '$label2',
        lineHeight: '18px',
        fontWeight: '$medium',
        gap: '$1',
        '.label': {
          '-webkit-line-clamp': 1,
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          display: '-webkit-box',
        },
        '.destination': {
          background: '$blueShades80',
          display: 'flex',
          minWidth: '19px',
          minHeight: '18px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '$full',
          color: '$white',
          lineHeight: '18px',
        },
      },
      rounded: {
        borderRadius: '50%',
        justifyContent: 'center',
        '.label': {
          display: 'none',
        },
      },
    },
    status: {
      online: {},
      away: {},
      busy: {},
      offline: {},
    },
    statusSize: {
      '8': {
        width: '$2',
        height: '$2',
        padding: 0,
      },
      '12': {width: '$3', height: '$3', padding: 0, '.icon': {width: '$2'}},
      '16': {width: '$4', height: '$4', padding: 0, '.icon': {width: '$2'}},
      '20': {width: '$5', height: '$5', padding: 0, '.icon': {width: '$3'}},
      '24': {
        width: '$6',
        height: '$6',
        padding: 0,
        '.icon': {width: '$4'},
        '& > .icon svg ': {width: '$4', height: '$4'},
      },
      '28': {
        width: '$7',
        height: '$7',
        padding: 0,
        '.icon': {width: '$5'},
        '& > .icon svg ': {width: '$5', height: '$5'},
      },
    },
    isRevert: {
      true: {
        flexDirection: 'row-reverse',
        padding: '3px 3px 3px $2',
      },
    },
    isDisabled: {
      true: {},
      false: {},
    },
    size: {
      sm: {
        height: '$4_5',
        fontSize: '$label2',
        lineHeight: '18px',
      },
      md: {
        height: '$6_5',
        fontSize: '$label2',
        lineHeight: '18px',
      },
      lg: {
        height: '$6_5',
        fontSize: '$body2',
        lineHeight: '24px',
      },
    },
  },

  compoundVariants: [
    ...(() => {
      const colors = ['info', 'success', 'danger', 'warning']

      return colors
        .map((color) => [
          {
            isDisabled: true,
            css: {
              background: '$gray20',
              color: '$gray60',
            },
          },
          // primary
          {
            color,
            variant: 'primary',
            isDisabled: false,
            css: {
              background: `$${
                color === 'warning' ? 'badgeWarningBg' : `${color}`
              }`,
              color: `$${color === 'warning' ? 'warningBg' : 'whiteText'}`,
            },
          },
          // secondary
          {
            color,
            variant: 'secondary',
            isDisabled: false,

            css: {
              background: `$${
                color === 'warning' ? 'warningBg' : `${color}Bg`
              }`,
              color: `$${color === 'warning' ? 'badgeWarningBg' : `${color}`}`,
            },
          },
          // outline
          {
            color,
            isDisabled: false,
            variant: 'outline',
            css: {
              background: `$${
                color === 'warning' ? 'warningBg' : `${color}Bg`
              }`,
              color: `$${color === 'warning' ? 'badgeWarningBg' : `${color}`}`,
              borderColor: `$${
                color === 'warning' ? 'badgeWarningBg' : `${color}`
              }`,
            },
          },
        ])
        .flat()
    })(),
    {
      status: 'online',
      variant: 'rounded',
      isDisabled: false,
      css: {
        backgroundColor: '$success',
        color: '$whiteText',
      },
    },
    {
      status: 'away',
      variant: 'rounded',
      isDisabled: false,
      css: {
        backgroundColor: '$badgeWarningBg',
        color: '$whiteText',
      },
    },
    {
      status: 'busy',
      variant: 'rounded',
      isDisabled: false,
      css: {
        backgroundColor: '$danger',
        color: '$whiteText',
      },
    },
    {
      status: 'offline',
      variant: 'rounded',
      isDisabled: false,
      css: {
        backgroundColor: '$white',
        color: '$whiteText',
        border: '2px solid $gray70',
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    color: 'info',
    isDisabled: false,
  },
})

export type BadgeVariantProps = VariantProps<typeof StyledBadge>
