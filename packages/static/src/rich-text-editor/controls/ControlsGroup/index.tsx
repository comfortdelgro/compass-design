import React from 'react'

export type ControlsGroupProps = {
  children?: React.ReactNode
}

const ControlsGroup = React.forwardRef<HTMLDivElement, ControlsGroupProps>(
  (props) => <>{props.children}</>,
)

export default ControlsGroup
