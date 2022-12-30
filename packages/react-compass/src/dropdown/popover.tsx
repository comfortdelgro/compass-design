import {DismissButton, Overlay, usePopover} from '@react-aria/overlays'
import {OverlayTriggerState} from '@react-stately/overlays'
import React, {RefObject} from 'react'
import {useDOMRef} from '../utils/use-dom-ref'

export type Placement =
  | 'bottom'
  | 'bottom left'
  | 'bottom right'
  | 'bottom start'
  | 'bottom end'
  | 'top'
  | 'top left'
  | 'top right'
  | 'top start'
  | 'top end'
  | 'left'
  | 'left top'
  | 'left bottom'
  | 'start'
  | 'start top'
  | 'start bottom'
  | 'right'
  | 'right top'
  | 'right bottom'
  | 'end'
  | 'end top'
  | 'end bottom'
interface Props {
  state: OverlayTriggerState
  triggerRef: RefObject<Element>
  popoverRef: RefObject<Element>
  children: React.ReactElement
  isNonModal: boolean
  placement?: Placement
}

const Popover = React.forwardRef<HTMLDivElement, Props>(
  ({children, state, ...props}, ref) => {
    const popoverRef = useDOMRef<HTMLDivElement>(ref)
    const {popoverProps} = usePopover(
      {
        ...props,
        popoverRef,
        offset: 24,
      },
      state,
    )

    const close = () => state.close()
    return (
      <Overlay>
        <div style={{position: 'relative'}}>
          <div
            {...popoverProps}
            ref={popoverRef}
            style={{
              ...popoverProps.style,
              background: 'lightgray',
              width: '100%',
              border: '1px solid gray',
            }}
          >
            {children}
            <DismissButton onDismiss={close} />
          </div>
        </div>
      </Overlay>
    )
  },
)

export default Popover
