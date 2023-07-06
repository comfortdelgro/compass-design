import {styled} from '../theme'

export const StyledTable = styled('div', {
  overflowX: 'auto',
  table: {
    fontFamily: '$sans',
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid $primaryBg',
  },
})

export const StyledTableWrapper = styled('div', {
  width: '100%',
})
