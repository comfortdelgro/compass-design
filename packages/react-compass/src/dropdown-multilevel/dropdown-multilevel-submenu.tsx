import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDropdownMultilevelSubmenu} from './dropdown-multilevel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  'aria-labelledby'?: string
}

export type DropdownMultilevelSubmenuProps = Props &
  Omit<React.HTMLAttributes<HTMLUListElement>, keyof Props>

const DropdownMultilevelSubmenu = React.forwardRef<
  HTMLUListElement,
  DropdownMultilevelSubmenuProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props
  const DropdownMultilevelSubmenuRef = useDOMRef<HTMLUListElement>(ref)

  return (
    <StyledDropdownMultilevelSubmenu
      css={css}
      ref={DropdownMultilevelSubmenuRef}
      role='menu'
      aria-labelledby={props['aria-labelledby']}
      className={`cdg-dropdown-multilevel-submenu ${className ?? ''}`}
      {...delegated}
    >
      {children}
    </StyledDropdownMultilevelSubmenu>
  )
})

export default DropdownMultilevelSubmenu
