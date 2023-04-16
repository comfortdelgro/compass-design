import {VariantProps} from '@stitches/react'
import {styled} from '../../../theme'

export const StyledControlsGroup = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
})

export type StyledControlsGroupProps = VariantProps<typeof StyledControlsGroup>
