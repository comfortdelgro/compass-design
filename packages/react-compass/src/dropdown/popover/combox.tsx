import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from '@react-aria/overlays'
import {ComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {StyledPopover} from '../dropdown.styles'

interface Props<T = unknown> extends AriaPopoverProps {
  state: ComboBoxState<T>
  triggerRef: React.RefObject<HTMLInputElement>
  popoverRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
}

function Popover({children, state, ...props}: Props) {
  const ref = React.useRef(null)
  const {popoverRef = ref} = props
  const {popoverProps} = usePopover(
    {
      ...props,
      offset: 8,
      shouldFlip: true,
      popoverRef,
    },
    state,
  )

  const styles = props.triggerRef.current?.clientWidth
    ? {
        ...popoverProps.style,
        width: 'fit-content',
        minWidth: props.triggerRef.current.clientWidth + 2,
      }
    : {...popoverProps?.style}

  return (
    <Overlay>
      <StyledPopover {...popoverProps} ref={popoverRef} style={styles}>
        {children}
        <DismissButton onDismiss={() => state.close()} />
      </StyledPopover>
    </Overlay>
  )
}
export default Popover
