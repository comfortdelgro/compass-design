import {styled} from '../theme'

export const StyledReactTableRow = styled('tr', {
  background: '$whiteText',
  backgroundColor: 'transparent',
  borderLeftWidth: '$medium',
  borderWidth: `$borderWidths.light`,
  transition: '$default',
  variants: {
    isSelected: {
      true: {
        backgroundColor: '$cdgBlue10',
        borderLeftColor: '$cdgBlue',
        borderLeftStyle: 'solid',
      },
    },
  },
})
