import {styled} from '../theme'

export const StyledTableV2SortingIndicator = styled('span', {
  color: '$gray30',
  textAlign: 'left',
  visibility: 'visible',
})

export const StyledTableV2ColumnHeader = styled('th', {
  fontSize: '$label1',
  fontWeight: '$semibold',
  padding: '$3_5 $3',
  position: 'relative',
  // border: '1px solid $gray100',
})

export const StyledTableV2ColumnHeaderContent = styled('div', {
  variants: {
    canSort: {
      true: {
        display: 'flex',
        minHeight: '30px',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
      },
    },
  },
})
