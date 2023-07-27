import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledExpandableRow = styled('tr', {
  all: 'unset',
})

export type ExpandableRowProps = VariantProps<typeof StyledExpandableRow>
