import {styled} from '../../theme'
import {fadeInLeft, fadeOutRight} from '../../theme/keyframes'
import {VariantProps} from '../../utils/stitches.types'

export const StyledToastContainer = styled('div', {
  position: 'fixed',
  padding: '$1 $5',
  right: 0,
  display: 'flex',
  gap: '$6',
  flexDirection: 'column',
  overflowX: 'hidden',
  overflowY: 'auto',
  zIndex: 61,
  '&.cdg-toast-container-hidden': {
    display: 'none',
  },
})

export const StyledToastItem = styled('div', {
  animation: `${fadeInLeft} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)`,
  '&.cdg-toast-item-fade-out': {
    animation: `${fadeOutRight} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
  },
  '.cdg-toast-item': {
    position: 'relative',
    transform: 'unset',
    top: 'unset',
    left: 'unset',
  },
  '.cdg-toast-item-close-icon': {
    width: '$4',
    height: '$4',
  },
})

export type ToastContainerVariantProps = VariantProps<
  typeof StyledToastContainer
>
