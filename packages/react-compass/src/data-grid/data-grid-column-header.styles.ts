import {styled} from '../theme'

export const StyledDataGridSortingIndicator = styled('span', {
  color: '$gray30',
  textAlign: 'right',
  visibility: 'visible',
})

export const StyledDataGridColumnHeader = styled('th', {
  textAlign: 'center',
  fontSize: '$label1',
  fontWeight: '$semibold',
  padding: '$3_5 $3',
  position: 'relative',
  // border: '1px solid $gray100',
})

export const StyledDataGridColumnHeaderContent = styled('div', {
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
