import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {
  ConfirmPUPointVariantProps,
  StyledConfirmPUPoint,
} from './confirm-pickup.styles'

type Props = StyledComponentProps
export type ConfirmPUPointProps = Props & ConfirmPUPointVariantProps

const ConfirmPUPoint = () => {
  return <StyledConfirmPUPoint>TODO</StyledConfirmPUPoint>
}
ConfirmPUPoint.displayName = 'ConfirmPUPoint'
export default ConfirmPUPoint
