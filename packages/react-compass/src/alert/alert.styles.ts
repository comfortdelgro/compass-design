import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledAlert = styled('div', {
  width: '100%',
  position: 'relative',
  padding: '$2 $4',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontFamily: '$sans',
  fontSize: '$body2',
  lineHeight: '$normal',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderRadius: '$md',
  color: '$primaryText',
  borderColor: 'transparent',

  svg: {
    width: '$4',
    height: '$4',
    marginRight: '$2',
  },

  '.alert-dismiss-button': {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '7px 7px 0 0',
  },

  variants: {
    color: {
      info: {
        background: '$infoBg',
        borderColor: '$infoBg',
        '& svg': {
          color: '$info',
        },
        '.alert-close-icon': {
          color: '$primaryText',
        },
      },
      success: {
        background: '$successBg',
        borderColor: '$successBg',
        '& svg': {
          color: '$success',
        },
        '.alert-close-icon': {
          color: '$primaryText',
        },
      },
      warning: {
        background: '$warningBg',
        borderColor: '$warningBg',
        '& svg': {
          color: '$warning',
        },
        '.alert-close-icon': {
          color: '$primaryText',
        },
      },
      danger: {
        background: '$dangerBg',
        borderColor: '$dangerBg',
        '& svg': {
          color: '$danger',
        },
        '.alert-close-icon': {
          color: '$primaryText',
        },
      },
    },
  },
})

export type AlertVariantProps = VariantProps<typeof StyledAlert>