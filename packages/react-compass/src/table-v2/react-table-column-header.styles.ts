import {styled} from '../theme'

export const StyledReactTableHeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const StyledReactTableSortingIndicator = styled('span', {
  color: '$gray30',
  textAlign: 'right',
})

export const StyledReactTableColumnHeader = styled('th', {
  textAlign: 'left',
  fontSize: '$label1',
  fontWeight: '$semibold',
  padding: '$3_5 $3',
  position: 'relative',
})
