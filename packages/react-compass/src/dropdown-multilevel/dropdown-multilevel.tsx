import React, {useState} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMultilevelContext from './dropdown-multilevel-context'
import DropdownMultilevelItem from './dropdown-multilevel-item'
import {
  default as DropdownMultilevelMenu,
  default as DropdownMultilevelSubmenu,
} from './dropdown-multilevel-menu'
import DropdownMultilevelToggle from './dropdown-multilevel-toggle'
import {StyledDropdownMultilevel} from './dropdown-multilevel.styles'
interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
  autoClose?: false | number
}

export type DropdownMultilevelProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DropdownMultilevel = React.forwardRef<
  HTMLDivElement,
  DropdownMultilevelProps
>((props, ref) => {
  const {children} = props

  const dropdownRef = useDOMRef<HTMLDivElement>(ref)

  // Pick child element from children props
  const {child: DropdownMultilevelToggleElement} = pickChild<
    typeof DropdownMultilevelToggle
  >(children, DropdownMultilevelToggle)

  const {child: DropdownMultilevelMenuElement} = pickChild<
    typeof DropdownMultilevelMenu
  >(children, DropdownMultilevelMenu)

  const [open, setOpen] = useState(false)

  const contextValue = React.useMemo(
    () => ({open, setOpen: setOpen}),
    [open, setOpen],
  )

  return (
    <StyledDropdownMultilevel ref={dropdownRef}>
      <DropdownMultilevelContext.Provider value={contextValue}>
        {DropdownMultilevelToggleElement}
        {open && DropdownMultilevelMenuElement}
      </DropdownMultilevelContext.Provider>
    </StyledDropdownMultilevel>
  )
})

export default DropdownMultilevel as typeof DropdownMultilevel & {
  Toggle: typeof DropdownMultilevelToggle
  Item: typeof DropdownMultilevelItem
  Submenu: typeof DropdownMultilevelSubmenu
  Menu: typeof DropdownMultilevelMenu
}
