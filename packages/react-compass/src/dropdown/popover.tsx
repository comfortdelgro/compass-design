import {
  DismissButton,
  Overlay,
  OverlayTriggerAria,
  usePopover,
} from '@react-aria/overlays'
import {OverlayTriggerState} from '@react-stately/overlays'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props extends OverlayTriggerAria {
  state: OverlayTriggerState
}

const Popover = React.forwardRef<HTMLDivElement, Props>(
  ({children, state, ...props}, ref) => {
    const popoverRef = useDOMRef<HTMLDivElement>(ref)
    const {popoverProps} = usePopover(
      {
        ...props,
        popoverRef,
        triggerRef: props.triggerProps,
      },
      state,
    )

    const close = () => state.close()
    return (
      <Overlay>
        <div
          {...popoverProps}
          ref={popoverRef}
          style={{
            ...popoverProps.style,
            background: 'lightgray',
            border: '1px solid gray',
          }}
        >
          {children}
          <DismissButton onDismiss={close} />
        </div>
      </Overlay>
    )
  },
)

export default Popover
