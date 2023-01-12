import {AriaPopoverProps, Overlay, usePopover} from '@react-aria/overlays'
import {ComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledPopover} from './dropdown.styles'

interface Props<T = unknown> extends AriaPopoverProps {
  state: ComboBoxState<T>
  children: React.ReactNode
}

const Popover = React.forwardRef<HTMLDivElement, Props>(
  ({children, state, ...props}, ref) => {
    const popoverRef = useDOMRef<HTMLDivElement>(ref)
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
      <Overlay>
        <StyledPopover
          {...popoverProps}
          ref={popoverRef}
          className='popover'
          style={
            props.triggerRef.current?.clientWidth
              ? {
                  ...popoverProps.style,
                  width: 'fit-content',
                  minWidth: props.triggerRef.current.clientWidth + 2,
                }
              : {...popoverProps?.style}
          }
        >
          {children}
        </StyledPopover>
      </Overlay>
    )
  },
)

export default Popover
