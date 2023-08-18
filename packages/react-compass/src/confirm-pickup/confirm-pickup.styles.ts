import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledConfirmPUPoint = styled('div', {
  width: '375px',
  height: '243px',
  backgroundColor: '$background',
  borderRadius: '16px 16px 0px 0px',
})

export type ConfirmPUPointVariantProps = VariantProps<
  typeof StyledConfirmPUPoint
>
