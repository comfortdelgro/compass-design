import {styled} from '../theme'

export const StyledReactTableSortingIndicator = styled('span', {
  color: '$gray30',
  textAlign: 'right',
  visibility: 'visible',
})

export const StyledReactTableColumnHeader = styled('th', {
  textAlign: 'left',
  fontSize: '$label1',
  fontWeight: '$semibold',
  padding: '$3_5 $3',
  position: 'relative',
})

export const StyledReactTableColumnHeaderContent = styled('div', {
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
