import React from 'react'
import {StyledPopover} from './index.styles'

interface Props {
  triggerRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
  isEmpty: boolean
  type: 'heading' | 'color' | 'alignment'
  handleKeyDown: (e: KeyboardEvent) => void
  onFocus: () => void
  onBlur: () => void
}

function Popover({children, handleKeyDown, onFocus, onBlur, ...props}: Props) {
  const {isEmpty = false, type} = props

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
      type={type}
      style={{
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
