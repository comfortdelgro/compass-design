import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledLegend = styled('div', {
  display: 'flex',
  gap: '$4',
  fontWeight: '$semibold',
  '.chart-legend-item': {
    display: 'flex',
    '& div': {
      marginRight: '$2',
      width: '$4',
      height: '$4',
      borderRadius: '$full',
    },
  },
  variants: {
    position: {
      top: {
        marginBottom: '$6',
        justifyContent: 'flex-end',
      },
      bottom: {
        marginTop: '$6',
        justifyContent: 'center',
      },
    },
  },
})
export type LegendVariantProps = VariantProps<typeof StyledLegend>
