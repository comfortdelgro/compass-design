import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from '@react-aria/overlays'
import React from 'react'
import {StyledPopover} from '../multiple-dropdown.styles'
import {CollapseState} from '../utils'

interface Props extends AriaPopoverProps {
  collapseState: CollapseState
  popoverRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
}

const Popover: React.FC<Props> = ({children, collapseState, ...props}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const {popoverRef = ref} = props
  const {popoverProps} = usePopover(
    {
      ...props,
      offset: 8,
      shouldFlip: true,
      popoverRef,
    },
    {
      close: () => collapseState.close(),
      isOpen: collapseState.isOpen,
      setOpen: (isOpen) => collapseState.setOpen(isOpen),
      open: () => collapseState.open(),
      toggle: () => collapseState.open(),
    },
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
        <DismissButton onDismiss={() => collapseState.close()} />
      </StyledPopover>
    </Overlay>
  )
}

export default Popover
