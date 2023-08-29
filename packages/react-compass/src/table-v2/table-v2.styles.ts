import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTableV2 = styled('div', {
  overflowX: 'auto',
  table: {
    fontFamily: '$sans',
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid $primaryBg',
  },
})

export const StyledTableV2Wrapper = styled('div', {
  width: '100%',
})

export type TableV2VariantProps = VariantProps<typeof StyledTableV2>
