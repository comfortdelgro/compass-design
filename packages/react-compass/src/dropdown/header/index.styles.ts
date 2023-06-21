import {styled} from '../../theme'

export const StyledHeaderList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '$2 $4',
  borderBottom: '2px solid $gray30',
  span: {
    color: '$primaryText',
    fontSize: '$label2',
    fontWeight: '$bold',
    padding: 0,
    margin: 0,
  },
  button: {
    fontSize: '$label2',
    fontWeight: '$bold',
    color: '$danger',
    border: 0,
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
})
