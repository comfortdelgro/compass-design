import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'
import {StyledCardBody} from './card-body.styles'
import {StyledCardTitle} from './card-title.styles'

export const StyledCard = styled('div', {
  width: '100%',
  position: 'relative',
  backgroundColor: '$background',
  boxShadow:
    '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
  borderRadius: '$md',
  display: 'flex',
  flexDirection: 'column',
  transition: 'box-shadow 0.3s ease-in-out',

  '&:focus-visible': {
    outline: '$cdgBlue60 solid 2px',
  },

  '&:hover': {
    boxShadow:
      '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
    transition: 'box-shadow 0.3s ease-in-out',
  },

  variants: {
    isDarkTheme: {
      true: {
        backgroundColor: '$secondaryBg',
      },
      false: {},
    },
    isDisabled: {
      true: {
        backgroundColor: '$gray20',
        userSelect: 'none',
        cursor: 'not-allowed',
        [`& ${StyledCardTitle}`]: {
          color: '$gray50',
        },
        [`& ${StyledCardBody}`]: {
          color: '$gray50',
        },
      },
    },
    isShadowless: {
      true: {
        boxShadow: 'none',
      },
    },
    isClickable: {
      true: {
        cursor: 'pointer',
        '&:active': {
          backgroundColor: '$gray20',
        },
      },
    },
    size: {
      sm: {
        maxWidth: '245px',
      },
      lg: {
        maxWidth: '396px',
      },
      full: {
        width: '100%',
      },
    },
  },
})

export type CardVariantProps = VariantProps<typeof StyledCard>
