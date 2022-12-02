/* eslint-disable @typescript-eslint/unbound-method */
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from '@react-aria/overlays'
import {OverlayTriggerState} from '@react-stately/overlays'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'

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
          background: 'var(--page-background)',
          border: '1px solid gray',
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
