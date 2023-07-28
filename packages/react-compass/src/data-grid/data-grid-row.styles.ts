import {styled} from '../theme'

export const StyledDataGridRow = styled('tr', {
  background: '$whiteText',
  backgroundColor: 'transparent',
  borderLeftWidth: '$medium',
  transition: '$default',
  border: 'none',
  variants: {
    isSelected: {
      true: {
        borderWidth: `$borderWidths.light`,
        backgroundColor: '$cdgBlue10',
        borderLeft: '1px solid $cdgBlue',
      },
    },
    isExpanded: {
      true: {
        backgroundColor: '$cdgBlue10',
      },
    },
  },
})
