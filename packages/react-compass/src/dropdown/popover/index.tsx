import React from 'react'
import {LISTBOX_Z_INDEX, POPOVER_Z_INDEX} from '../utils'
import {StyledPopover} from './index.styles'

interface Props {
  triggerRef: React.RefObject<HTMLDivElement>
  popoverRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
  maxULHeight: number | undefined
  isEmpty: boolean
  close: () => void
  handleKeyDown: (e: KeyboardEvent) => void
}

function Popover({
  children,
  triggerRef,
  maxULHeight,
  close,
  handleKeyDown,
  ...props
}: Props) {
  const ref = React.useRef(null)
  const {popoverRef = ref, isEmpty = false} = props

  const elementIsVisibleInViewport = () => {
    const rect = popoverRef.current?.getBoundingClientRect()
    if (rect) {
      const {top, left, bottom, right} = rect
      const {innerHeight, innerWidth} = window
      return (
        top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
      )
    }
    return true
  }

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
          display: isEmpty ? 'none' : '',
          ...(elementIsVisibleInViewport()
            ? {
                bottom: `${(triggerRef.current?.clientHeight ?? 42) + 10}px`,
              }
            : {
                top: '8px',
              }),
        }}
        css={{
          $$zIndex: LISTBOX_Z_INDEX,
          ul: {maxHeight: maxULHeight ? `${maxULHeight}px` : '16rem'},
        }}
      >
        {children}
      </StyledPopover>
    </>
  )
}
export default Popover
