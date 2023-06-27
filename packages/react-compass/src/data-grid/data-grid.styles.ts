import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledDataGrid = styled('div', {
  overflowX: 'auto',
  table: {
    fontFamily: '$sans',
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid $primaryBg',
  },
})

export const StyledDataGridWrapper = styled('div', {
  width: '100%',
})

export type DataGridVariantProps = VariantProps<typeof StyledDataGrid>
