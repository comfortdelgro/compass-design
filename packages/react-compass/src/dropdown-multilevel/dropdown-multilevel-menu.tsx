import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMultilevelContext, {
  DropdownMultilevelContextType,
} from './dropdown-multilevel-context'
import {StyledDropdownMultilevelMenu} from './dropdown-multilevel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DropdownMultilevelMenuProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DropdownMultilevelMenu = React.forwardRef<
  HTMLDivElement,
  DropdownMultilevelMenuProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  const dropdownMultilevelMenuRef = useDOMRef<HTMLDivElement>(ref)

  const contextValue = useContext(
    DropdownMultilevelContext,
  ) as DropdownMultilevelContextType

  return (
    <StyledDropdownMultilevelMenu
      css={css}
      ref={dropdownMultilevelMenuRef}
      {...delegated}
    >
      {children}
    </StyledDropdownMultilevelMenu>
  )
})

export default DropdownMultilevelMenu
