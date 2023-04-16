import React from 'react'
import {LISTBOX_Z_INDEX, POPOVER_Z_INDEX} from '../utils'
import {StyledPopover} from './index.styles'

interface Props {
  triggerRef: React.RefObject<HTMLDivElement>
  popoverRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
  close: () => void
  handleKeyDown: (e: KeyboardEvent) => void
}

function Popover({
  children,
  triggerRef,
  close,
  handleKeyDown,
  ...props
}: Props) {
  const ref = React.useRef(null)
  const {popoverRef = ref} = props

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
        popoverRef.current.style.bottom = `${
          (triggerRef.current?.clientHeight ?? 42) + 18
        }px`
      }
    }
  }, [])

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <>
      <div
        onClick={close}
        style={{position: 'fixed', inset: 0, zIndex: POPOVER_Z_INDEX}}
      />
      <StyledPopover
        ref={popoverRef}
        style={{
          minWidth: triggerRef.current?.clientWidth
            ? triggerRef.current.clientWidth + 2
            : '100%',
        }}
        css={{$$zIndex: LISTBOX_Z_INDEX}}
      >
        {children}
      </StyledPopover>
    </>
  )
}
export default Popover
