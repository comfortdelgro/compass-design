import React from 'react'

export type ControlsGroupProps = {
  children?: React.ReactNode
}

const ControlsGroup: React.FC<ControlsGroupProps> = (props) => (
  <>{props.children}</>
)

export default ControlsGroup
