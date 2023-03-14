import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from '@react-aria/overlays'
import {SelectState} from '@react-stately/select'
import React from 'react'
import {StyledPopover} from '../dropdown.styles'

interface Props<T = unknown> extends AriaPopoverProps {
  state: SelectState<T>
  triggerRef: React.RefObject<HTMLButtonElement>
  popoverRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
}

function Popover({children, state, ...props}: Props) {
  const ref = React.useRef(null)
  const {popoverRef = ref} = props
  const {popoverProps, underlayProps} = usePopover(
    {
      ...props,
      offset: 8,
      shouldFlip: true,
      popoverRef,
    },
    state,
  )

  // React.useEffect(() => {
  //   const close = () => state.close()
  //   document.addEventListener('scroll', close, true)
  //   return () => {
  //     document.removeEventListener('scroll', close)
  //   }
  // }, [])

  const styles = props.triggerRef.current?.clientWidth
    ? {
        ...popoverProps.style,
        width: 'fit-content',
        minWidth: props.triggerRef.current.clientWidth + 2,
      }
    : {...popoverProps?.style}

  return (
    <Overlay>
      <div
        {...underlayProps}
        onClick={() => state.close()}
        style={{position: 'fixed', inset: 0}}
      />
      <StyledPopover {...popoverProps} ref={popoverRef} style={styles}>
        <DismissButton onDismiss={() => state.close()} />
        {children}
        <DismissButton onDismiss={() => state.close()} />
      </StyledPopover>
    </Overlay>
  )
}
export default Popover
