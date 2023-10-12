import React, {ReactNode} from 'react'

export type ControlsGroupProps = {
  children?: React.ReactNode
}

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
