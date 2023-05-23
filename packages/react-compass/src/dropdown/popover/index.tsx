import React from 'react'
import {StyledPopover} from './index.styles'

interface Props {
  triggerRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
  visualizeRef: React.RefObject<HTMLUListElement> | undefined
  isEmpty: boolean
  handleKeyDown: (e: KeyboardEvent) => void
}

function Popover({
  children,
  triggerRef,
  visualizeRef,
  handleKeyDown,
  ...props
}: Props) {
  const {isEmpty = false} = props

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <StyledPopover
      style={{
        minWidth: triggerRef?.current
          ? triggerRef?.current.clientWidth + 2
          : '100%',
        display: isEmpty ? 'none' : '',
      }}
      css={{
        ul: {
          maxHeight: visualizeRef?.current
            ? `${visualizeRef?.current.clientHeight}px`
            : '16rem',
        },
      }}
    >
      {children}
    </StyledPopover>
  )
}
export default Popover
