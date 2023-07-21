import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDropdownMultilevelSubmenu} from './dropdown-multilevel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DropdownMultilevelSubmenuProps = Props &
  Omit<React.HTMLAttributes<HTMLUListElement>, keyof Props>

const DropdownMultilevelSubmenu = React.forwardRef<
  HTMLUListElement,
  DropdownMultilevelSubmenuProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  const DropdownMultilevelSubmenuRef = useDOMRef<HTMLUListElement>(ref)

  return (
    <StyledDropdownMultilevelSubmenu
      css={css}
      ref={DropdownMultilevelSubmenuRef}
      {...delegated}
      className='cdg-dropdown-multilevel-submenu'
    >
      {children}
    </StyledDropdownMultilevelSubmenu>
  )
})

export default DropdownMultilevelSubmenu
