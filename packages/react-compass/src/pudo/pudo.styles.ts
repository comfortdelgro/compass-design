import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledPUDO = styled('div', {
  padding: '$4',

  maxWidth: '100%',
  borderRadius: '$lg',
})

export const StyledPUDOItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  paddingBlock: '$2',
  variants: {
    variant: {
      input: {},
      label: {},
    },
  },
})

export type PudoItemVariantProps = VariantProps<typeof StyledPUDOItem>
