import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMenuContext from './dropdown-menu-context'
import {StyledDropdownMenuToggle} from './dropdown-menu.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  'aria-haspopup'?: boolean
}

export type DropdownMenuToggleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DropdownMenuToggle = React.forwardRef<
  HTMLDivElement,
  DropdownMenuToggleProps
>((props, ref) => {
  const {children, css = {}, onClick, ...delegated} = props
  const DropdownMenuToggleRef = useDOMRef<HTMLDivElement>(ref)

  const {open, setOpen, onClose, onOpenChange} = useContext(DropdownMenuContext)

  const handleButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (open) {
      onClose?.()
    }
    onOpenChange?.(!open)
    setOpen(!open)
    onClick?.(event)
  }

  return (
    <StyledDropdownMenuToggle
      css={css}
      ref={DropdownMenuToggleRef}
      onClick={handleButtonClick}
      aria-haspopup={props['aria-haspopup']}
      {...delegated}
    >
      {children}
    </StyledDropdownMenuToggle>
  )
})

export default DropdownMenuToggle
