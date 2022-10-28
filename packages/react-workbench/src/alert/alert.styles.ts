import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledAlert = styled('div', {
  width: '100%',
  position: 'relative',
  padding: '$2 $4',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  fontFamily: '$sans',
  fontSize: '$body2',
  lineHeight: '$normal',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderRadius: '$md',
  borderColor: 'transparent',

  '.alert-icon': {
    width: '$4',
    height: '$4',
    marginTop: '1px',
    marginRight: '$2',
    lineHeight: '$normal',
  },

  // to be updated after icon button variant is added
  '.alert-dismiss-button': {
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '$1 $1 0 0',
  },

  variants: {
    color: {
      info: {
        background: '$infoBg',
        borderColor: '$infoBg',
        '& .alert-icon': {
          color: '$info',
        },
      },
      success: {
        background: '$successBg',
        borderColor: '$successBg',
        '& .alert-icon': {
          color: '$success',
        },
      },
      warning: {
        background: '$warningBg',
        borderColor: '$warningBg',
        '& .alert-icon': {
          color: '$warning',
        },
      },
      danger: {
        background: '$dangerBg',
        borderColor: '$dangerBg',
        '& .alert-icon': {
          color: '$danger',
        },
      },
    },
  },
})

export type AlertVariantProps = VariantProps<typeof StyledAlert>
