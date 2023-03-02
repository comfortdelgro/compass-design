import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledReactTable = styled('div', {
  overflowX: 'auto',
  table: {
    fontFamily: '$sans',
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid #F5F5F6',
  },
})

export const StyledReactTableWrapper = styled('div', {
  width: '100%',
})

export type ReactTableVariantProps = VariantProps<typeof StyledReactTable>
