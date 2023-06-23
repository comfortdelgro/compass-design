import {styled} from '../../theme'
import {fadeInLeft, fadeOutRight} from '../../theme/keyframes'
import {VariantProps} from '../../utils/stitches.types'

export const StyledToastContainer = styled('div', {
  position: 'fixed',
  padding: '4px 20px',
  right: 0,
  display: 'flex',
  gap: '24px',
  flexDirection: 'column',
  overflowX: 'hidden',
  overflowY: 'auto',
  zIndex: 61,
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
    width: 16,
    height: 16,
  },
})

export type ToastContainerVariantProps = VariantProps<
  typeof StyledToastContainer
>
