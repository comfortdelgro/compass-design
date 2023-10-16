import {styled} from '../../theme'
import {
  fadeInLeft,
  fadeInRight,
  fadeInTop,
  fadeOutBottom,
  fadeOutLeft,
  fadeOutRight,
} from '../../theme/keyframes'
import {VariantProps} from '../../utils/stitches.types'

export const StyledSnackbarContainer = styled('div', {
  position: 'fixed',
  padding: '$5',
  display: 'flex',
  gap: '$6',
  flexDirection: 'column',
  overflowX: 'hidden',
  overflowY: 'auto',
  zIndex: 61,
  '&.cdg-snackbar-container-hidden': {
    display: 'none',
  },
  '@mobile': {
    gap: '$2',
  },
  variants: {
    vertical: {
      top: {
        top: '0',
      },
      center: {
        top: '50%',
        transform: 'translateY(-50%)',
      },
      bottom: {
        bottom: '0',
      },
    },
    horizontal: {
      left: {
        left: '0',
      },
      center: {
        left: '50%',
        transform: 'translateX(-50%)',
      },
      right: {
        right: '0',
      },
    },
    centerCenter: {
      true: {
        transform: 'translate(-50%, -50%)',
      },
    },
  },
})

export const StyledSnackbarItem = styled('div', {
  variants: {
    horizontal: {
      left: {
        animation: `${fadeInRight} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)`,
        '&.cdg-snackbar-item-fade-out': {
          animation: `${fadeOutLeft} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
        },
      },
      center: {
        animation: `${fadeInTop} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)`,
        '&.cdg-snackbar-item-fade-out': {
          animation: `${fadeOutBottom} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
        },
      },
      right: {
        animation: `${fadeInLeft} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)`,
        '&.cdg-snackbar-item-fade-out': {
          animation: `${fadeOutRight} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
        },
      },
    },
  },
  '.cdg-snackbar-item': {
    position: 'relative',
    transform: 'unset',
    top: 'unset',
    left: 'unset',
  },
})

export type SnackbarContainerVariantProps = VariantProps<
  typeof StyledSnackbarContainer
>
