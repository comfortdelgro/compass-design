import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledAlert = styled('div', {
  width: '100%',
  position: 'relative',
  padding: '$2 $4',
  display: 'flex',
  gap: '$4',
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
    width: '$6',
    height: '$6',
  },

  '.alert-dismiss-button': {
    padding: '0',
  },

  '.alert-content': {
    flexGrow: 1,
  },

  '.alert-dismiss-button.custom .alert-close-icon': {
    width: '$4',
    height: '$4',
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
          color: '$badgeWarningBg',
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

export const StyledIcon = styled('div', {
  flexShrink: 1,
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  height: 'fit-content',
})

export type AlertVariantProps = VariantProps<typeof StyledAlert>
