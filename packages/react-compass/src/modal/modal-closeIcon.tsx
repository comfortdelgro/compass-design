import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledModalCloseIcon} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  onClose?: () => void
  onfocus?: (e: React.FocusEvent) => void
}

export type ModalCloseIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalCloseIcon = React.forwardRef<HTMLDivElement, ModalCloseIconProps>(
  (props, ref) => {
    const {children, css = {}, onClose, onfocus, ...delegated} = props

    const [isFocused, setIsFocused] = React.useState(false)
    const modalCloseIconRef = useDOMRef<HTMLDivElement>(ref)
    const handleFocus = React.useCallback((e: React.FocusEvent) => {
      e.stopPropagation()
      e.preventDefault()
      onfocus?.(e as unknown as React.FocusEvent)
      setIsFocused(true)
    }, [])

    const handleKeyDown = (e: React.KeyboardEvent) => {
      e.stopPropagation()
      e.preventDefault()
      if (e.key === 'Enter' && isFocused) {
        onClose?.()
      }
    }

    return (
      <StyledModalCloseIcon
        css={css}
        ref={modalCloseIconRef}
        onClick={() => onClose?.()}
        tabIndex={0}
        onFocus={(e) => handleFocus?.(e as unknown as React.FocusEvent)}
        onKeyDown={(e) => handleKeyDown?.(e as unknown as React.KeyboardEvent)}
        {...delegated}
      >
        {children}
      </StyledModalCloseIcon>
    )
  },
)

export default ModalCloseIcon
