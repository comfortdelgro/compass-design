import {AriaPopoverProps, usePopover} from '@react-aria/overlays'
import {ComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {StyledPopover} from '../dropdown.styles'

interface Props<T = unknown> extends AriaPopoverProps {
  state: ComboBoxState<T>
  popoverRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
}

const Popover: React.FC<Props> = ({children, state, ...props}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const {popoverRef = ref} = props
  const {popoverProps} = usePopover(
    {
      ...props,
      offset: 8,
      shouldFlip: false,
      popoverRef,
    },
    {...state, close: () => state.setOpen(false)},
  )
  return (
    <StyledPopover
      {...popoverProps}
      ref={popoverRef}
      style={
        props.triggerRef.current?.clientWidth
          ? {
              // ...popoverProps.style,
              width: 'fit-content',
              minWidth: props.triggerRef.current.clientWidth + 2,
            }
          : {...popoverProps?.style}
      }
    >
      {children}
    </StyledPopover>
  )
}

export default Popover
