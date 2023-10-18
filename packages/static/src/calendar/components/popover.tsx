/* eslint-disable @typescript-eslint/unbound-method */
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from '@react-aria/overlays'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {OverlayTriggerState} from '../types'

interface Props {
  children?: React.ReactNode
  popoverRef?: React.RefObject<Element>
  state: OverlayTriggerState
}

export type PopoverProps = Props & Omit<AriaPopoverProps, keyof Props>

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const {children, state} = props
  const popoverRef = useDOMRef(ref)
  const {popoverProps, underlayProps} = usePopover(
    {
      ...props,
      popoverRef,
    },
    state,
  )

  return (
    <Overlay>
      <div {...underlayProps} />
      <div
        {...popoverProps}
        ref={popoverRef}
        style={{
          ...popoverProps.style,
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
})

export default Popover
