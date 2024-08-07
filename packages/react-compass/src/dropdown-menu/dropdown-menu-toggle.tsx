'use client'
import React, {useContext} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMenuContext from './dropdown-menu-context'

interface Props {
  children?: React.ReactNode
  'aria-haspopup'?: boolean
  css?: CSS
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
    <CssInjection css={css} childrenRef={DropdownMenuToggleRef}>
      <div
        {...delegated}
        ref={DropdownMenuToggleRef}
        onClick={handleButtonClick}
        aria-haspopup={props['aria-haspopup']}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default DropdownMenuToggle
