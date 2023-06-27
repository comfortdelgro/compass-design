import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledDataGridProgressBar = styled('div', {
  width: '200px',
  height: '20px',
  backgroundColor: '$secondaryBg',
  borderRadius: '10px',
  position: 'relative',
})
export const StyledDataGridProgress = styled('div', {
  height: '100%',
  borderRadius: '10px',
  transition: `width 0.5s ease-in-out`,
  '&.low': {
    backgroundColor: '$danger',
  },
  '&.average': {
    backgroundColor: '$warning',
  },
  '&.high': {
    backgroundColor: '$success',
  },
})
export const StyledDataGridProgressLabel = styled('span', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '$primaryText',
})

export type DataGridProgressBarVariantProps = VariantProps<
  typeof StyledDataGridProgress
>
