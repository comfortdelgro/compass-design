import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import type {VariantProps} from '../utils/stitches.types'

const blink = keyframes({
  '0%': {
    opacity: '0.2',
  },
  '20%': {
    opacity: 1,
  },
  '100%': {
    opacity: '0.2',
  },
})

export const StyledLoading = styled('span', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',

  i: {
    display: 'inline-block',
    flexShrink: 0,
    width: '.375em',
    height: '.375em',
    borderRadius: '$full',
    background: 'currentColor',
    animation: `${blink} 1.4s infinite both`,
  },

  '.dot-2': {
    animationDelay: '0.2s',
  },
  '.dot-3': {
    animationDelay: '0.4s',
  },
})

export type LoadingVariantProps = VariantProps<typeof StyledLoading>
