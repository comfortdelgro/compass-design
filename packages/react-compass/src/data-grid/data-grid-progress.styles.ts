import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledDataGridProgressBar = styled('div', {
  width: '200px',
  height: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  position: 'relative',
})
export const StyledDataGridProgress = styled('div', {
  height: '100%',
  borderRadius: '10px',
  transition: `width 0.5s ease-in-out`,
  '&.low': {
    backgroundColor: '#f44336',
  },
  '&.average': {
    backgroundColor: '#ffc107',
  },
  '&.high': {
    backgroundColor: '#4caf50',
  },
})
export const StyledDataGridProgressLabel = styled('span', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#000',
})

export type DataGridProgressBarVariantProps = VariantProps<
  typeof StyledDataGridProgress
>
