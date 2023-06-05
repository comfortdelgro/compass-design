import React from 'react'
import {StyledPopover} from './index.styles'

interface Props {
  triggerRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
  isEmpty: boolean
  handleKeyDown: (e: KeyboardEvent) => void
  onFocus: () => void
  onBlur: () => void
}

function Popover({
  children,
  triggerRef,
  handleKeyDown,
  onFocus,
  onBlur,
  ...props
}: Props) {
  const {isEmpty = false} = props

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  React.useEffect(() => {
    onFocus()
    return () => {
      onBlur()
    }
  }, [])

  return (
    <StyledPopover
      style={{
        width: triggerRef?.current
          ? triggerRef?.current.clientWidth + 2
          : '100%',
        display: isEmpty ? 'none' : '',
      }}
      css={{
        ul: {
          maxHeight: '16rem',
        },
      }}
    >
      {children}
    </StyledPopover>
  )
}
export default Popover
