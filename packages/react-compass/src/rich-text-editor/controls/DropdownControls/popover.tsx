import type {AriaPopoverProps} from '@react-aria/overlays'
import {DismissButton, Overlay, usePopover} from '@react-aria/overlays'
import {OverlayTriggerState} from '@react-stately/overlays'
import * as React from 'react'
import {styled} from '../../../theme'

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode
  state: OverlayTriggerState
  popoverRef?: React.RefObject<HTMLDivElement>
}

const Wrapper = styled('div', {
  position: 'absolute',
  top: '100%',
  zIndex: 1,
  border: '1px solid lightgray',
  borderRadius: '4px',
  marginTop: '6px',
  background: 'white',
  boxShadow:
    '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
})

export function Popover(props: PopoverProps) {
  let ref = React.useRef<HTMLDivElement>(null)
  let {popoverRef = ref, state, children, isNonModal} = props

  let {popoverProps, underlayProps} = usePopover(
    {
      ...props,
      popoverRef,
    },
    state,
  )

  return (
    <Overlay>
      {!isNonModal && (
        <div {...underlayProps} style={{position: 'fixed', inset: 0}} />
      )}
      <Wrapper {...popoverProps} ref={popoverRef}>
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </Wrapper>
    </Overlay>
  )
}
