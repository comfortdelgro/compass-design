import React, {ReactNode} from 'react'
import {StyledComponentProps} from '../../../utils/stitches.types'
import {StyledControlsGroupProps} from './ControlsGroup.styles'

export type ControlsGroupProps = StyledComponentProps &
  StyledControlsGroupProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof StyledComponentProps>

const ControlsGroup = React.forwardRef<HTMLDivElement, ControlsGroupProps>(
  (props) => {
    const {
      // StyledComponentProps
      children,
    } = props

    return (
      <>
        {React.Children.map(children, (child: ReactNode, index) =>
          React.cloneElement(child as React.ReactElement, {
            style: {marginLeft: index === 0 ? '8px' : 0},
          }),
        )}
      </>
    )
  },
)

export default ControlsGroup
