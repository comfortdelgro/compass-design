import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledExpandableRow = styled('tr', {
  '&.enter': {
    transition: 'opacity 100ms ease',
  },

  '&.enterFrom': {
    opacity: 0,
  },

  '&.enterTo': {
    opacity: 1,
  },

  '&.leave': {
    transition: 'opacity 50ms ease',
  },

  '&.leaveFrom': {
    opacity: 1,
  },

  '&.leaveTo': {
    opacity: 0,
  },
})

export type ExpandableRowProps = VariantProps<typeof StyledExpandableRow>
