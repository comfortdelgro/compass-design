import {styled} from '../theme'

export const StyledDataGridCell = styled('td', {
  position: 'relative',
  textAlign: 'left',
  fontSize: '$label1',
  padding: '$3_5 $3',
  color: '$primaryText',
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
