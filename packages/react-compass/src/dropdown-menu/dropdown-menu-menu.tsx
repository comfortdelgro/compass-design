import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDropdownMenuMenu} from './dropdown-menu.styles'

interface MenuProps extends StyledComponentProps {
  children?: React.ReactNode
}

export type DropdownMenuMenuProps = MenuProps &
  Omit<React.HTMLAttributes<HTMLUListElement>, keyof MenuProps>

export const MULTILEVEL_MENU_CLASS_NAME = 'cdg-dropdown-multilevel-menu'

const DropdownMenuMenu = React.forwardRef<
  HTMLUListElement,
  DropdownMenuMenuProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props

  const DropdownMenuMenuRef = useDOMRef<HTMLUListElement>(ref)

  return (
    <StyledDropdownMenuMenu
      css={css}
      ref={DropdownMenuMenuRef}
      className={`${className ?? ''} ${MULTILEVEL_MENU_CLASS_NAME}`}
      {...delegated}
    >
      {children}
    </StyledDropdownMenuMenu>
  )
})

export default DropdownMenuMenu
