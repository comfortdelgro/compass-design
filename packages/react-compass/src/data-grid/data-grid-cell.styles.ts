import {styled} from '../theme'

export const StyledDataGridCell = styled('td', {
  position: 'relative',
  textAlign: 'left',
  fontSize: '$label1',
  padding: '$3_5 $3',
  border: '3px solid gray',
  zIndex: '10',
  '&:hover': {
    backgroundColor: '#F7F8F9',
    border: '3px solid black',
  },
})
