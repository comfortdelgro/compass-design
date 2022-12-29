import {styled} from '../theme'

export const StyledTableHeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const StyledTableSortingIndicator = styled('span', {
  color: '$gray60',
  textAlign: 'right',
})

export const StyledTableColumnHeader = styled('th', {
  textAlign: 'left',
  fontSize: '$label1',
  fontWeight: '$semibold',
  padding: '$3_5 $3',
})
