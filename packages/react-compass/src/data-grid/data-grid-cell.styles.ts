import {styled} from '../theme'

export const StyledDataGridCell = styled('td', {
  position: 'relative',
  fontSize: '$label1',
  padding: '$3_5 $3',
  color: '$primaryText',
  variants: {
    isGrouped: {
      true: {
        backgroundColor: '$successBg',
      },
    },
    isAggregated: {
      true: {
        backgroundColor: '$warningBg',
      },
    },
    isPlaceholder: {
      true: {
        backgroundColor: '$severeWarningBg',
      },
    },
  },
})
