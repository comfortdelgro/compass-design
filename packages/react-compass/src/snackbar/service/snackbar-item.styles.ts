import {styled} from '../../theme'
import {fadeInTop, fadeOutBottom} from '../../theme/keyframes'
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
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  '&.cdg-snackbar-container-hidden': {
    display: 'none',
  },
  '@mobile': {
    gap: '$2',
    width: '100%',
  },
})

export const StyledSnackbarItem = styled('div', {
  // width: '100%',
  animation: `${fadeInTop} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)`,
  '&.cdg-snackbar-item-fade-out': {
    animation: `${fadeOutBottom} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
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
