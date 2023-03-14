import React from 'react'
import {StyledComponentProps} from '../../../utils/stitches.types'
import {useDOMRef} from '../../../utils/use-dom-ref'
import {
  StyledControlsGroup,
  StyledControlsGroupProps,
} from './ControlsGroup.styles'
export type ControlsGroupProps = StyledComponentProps &
  StyledControlsGroupProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof StyledComponentProps>

const ControlsGroup = React.forwardRef<HTMLDivElement, ControlsGroupProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      children,
      // element
      ...delegates
    } = props
    const controlsGroupRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledControlsGroup ref={controlsGroupRef} css={css} {...delegates}>
        {children}
      </StyledControlsGroup>
    )
  },
)
export default ControlsGroup
