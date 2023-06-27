import {styled} from '../theme'

export const StyledDataGridCell = styled('td', {
  position: 'relative',
  textAlign: 'left',
  fontSize: '$label1',
  padding: '$3_5 $3',
  border: '3px solid gray',
  zIndex: '10',
  color: '$primaryText',
  backgroundColor: '$background',
  '&:hover': {
    backgroundColor: '#F7F8F9',
    border: '3px solid black',
  },
  variants: {
    isGrouped: {
      true: {
        backgroundColor: '#0aff0082',
      },
    },
    isAggregated: {
      true: {
        backgroundColor: '#ffa50078',
      },
    },
    isPlaceholder: {
      true: {
        backgroundColor: '#ff000042',
      },
    },
  },
})
