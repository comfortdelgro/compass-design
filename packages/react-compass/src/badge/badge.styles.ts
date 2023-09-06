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

  '& > .icon': {
    height: '100%',
    width: '$3_5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    marginRight: '$1',
  },

  '& > svg': {
    height: '$3',
    width: '100%',
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
    },
    isRevert: {
      true: {
        flexDirection: 'row-reverse',
        padding: '3px 3px 3px $2',
      },
    },
    size: {
      sm: {
        height: '$4_5',
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
          // primary
          {
            color,
            variant: 'primary',
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
  ],

  defaultVariants: {
    variant: 'primary',
    color: 'info',
    size: 'lg',
  },
})

export type BadgeVariantProps = VariantProps<typeof StyledBadge>
