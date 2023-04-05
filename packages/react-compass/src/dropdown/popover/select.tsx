import React from 'react'
import {StyledPopover} from '../dropdown.styles'

interface Props {
  close: () => void
  triggerRef: React.RefObject<HTMLButtonElement>
  popoverRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
}

function Popover({children, triggerRef, close, ...props}: Props) {
  const ref = React.useRef(null)
  const {popoverRef = ref} = props
  const styles = triggerRef.current?.clientWidth
    ? {
        width: 'fit-content',
        minWidth: triggerRef.current.clientWidth + 2,
        zIndex: 2147483641,
      }
    : {}

  React.useEffect(() => {
    const rect = popoverRef.current?.getBoundingClientRect()
    if (rect) {
      const isInViewport =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)

      if (!isInViewport && popoverRef.current) {
        popoverRef.current.style.bottom = '62px'
      }
    }
  }, [])

  return (
    <>
      <div
        onClick={close}
        style={{position: 'fixed', inset: 0, zIndex: 2147483640}}
      />
      <StyledPopover ref={popoverRef} style={styles}>
        {children}
      </StyledPopover>
    </>
  )
}
export default Popover
