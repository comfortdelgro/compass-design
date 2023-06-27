import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMultilevelContext, {
  DropdownMultilevelContextType,
} from './dropdown-multilevel-context'
import {StyledDropdownMultilevelSubmenu} from './dropdown-multilevel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DropdownMultilevelSubmenuProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DropdownMultilevelSubmenu = React.forwardRef<
  HTMLDivElement,
  DropdownMultilevelSubmenuProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  const DropdownMultilevelSubmenuRef = useDOMRef<HTMLDivElement>(ref)

  const contextValue = useContext(
    DropdownMultilevelContext,
  ) as DropdownMultilevelContextType

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
