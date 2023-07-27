import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledExpandableRow = styled('div', {
  height: 'fit-content',
})

export type ExpandableRowProps = VariantProps<typeof StyledExpandableRow>
