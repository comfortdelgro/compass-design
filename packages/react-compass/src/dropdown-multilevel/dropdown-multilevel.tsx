import React, {useCallback, useEffect, useRef, useState} from 'react'
import Popover from '../popover'
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
  const {children, onKeyDown, css = {}, ...delegated} = props

  const dropdownRef = useDOMRef<HTMLDivElement>(ref)

  // Pick child element from children props
  const {child: dropdownMultilevelToggleElement} = pickChild<
    typeof DropdownMultilevelToggle
  >(children, DropdownMultilevelToggle)

  const {child: dropdownMultilevelMenuElement} = pickChild<
    typeof DropdownMultilevelMenu
  >(children, DropdownMultilevelMenu)

  const [open, setOpen] = useState(false)
  const [itemIds, setItemIds] = useState<string[]>([])

  const refs = useRef<Array<React.RefObject<HTMLLIElement>>>([])

  const contextValue = React.useMemo(
    () => ({
      open,
      setOpen,
      itemIds,
      setItemIds,
      refs,
    }),
    [open, setOpen, itemIds, setItemIds],
  )

  const handleClosePopover = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) {
      refs.current = []
    }
  }, [open])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event)
    if (open) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
          event.preventDefault()
          break
        case 'ArrowUp':
          event.preventDefault()
          if (refs.current) {
            console.log(refs.current[refs.current.length - 1]?.current)
            refs.current[refs.current.length - 1]?.current?.focus()
          }
          break
        case 'ArrowDown':
          event.preventDefault()
          if (refs.current) {
            console.log(refs.current[0]?.current)

            refs.current[0]?.current?.focus()
          }
          break
        case 'Enter':
          event.preventDefault()
          break
        case 'Escape':
        case 'Tab':
          setOpen(false)
          break
      }
    }
  }

  return (
    <StyledDropdownMultilevel
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
      css={css}
      {...delegated}
    >
      <DropdownMultilevelContext.Provider value={contextValue}>
        <Popover
          isOpen={open}
          anchor={dropdownMultilevelToggleElement}
          direction='bottom-left'
          onClose={handleClosePopover}
        >
          {dropdownMultilevelMenuElement}
        </Popover>
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
