import {styled} from '../../theme'

export const StyledHeaderList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '$2 $4',
  borderBottom: '2px solid #EDEBE9',
  span: {
    color: '#323130',
    fontSize: '$label2',
    fontWeight: '$bold',
    padding: 0,
    margin: 0,
  },
  button: {
    fontSize: '$label2',
    fontWeight: '$bold',
    color: '#A4262C',
    border: 0,
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
})
