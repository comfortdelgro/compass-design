import React, {useCallback, useEffect, useRef, useState} from 'react'
import Popover from '../popover'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMenuContext from './dropdown-menu-context'
import DropdownMenuItem from './dropdown-menu-item'
import DropdownMenuMenu from './dropdown-menu-menu'
import DropdownMenuSubmenu from './dropdown-menu-submenu'
import DropdownMenuToggle from './dropdown-menu-toggle'
import {StyledDropdownMenu} from './dropdown-menu.styles'
interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  onOpenChange?: (status: boolean) => void
  'aria-labelledby'?: string
}

export type DropdownMenuProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props, ref) => {
    const {
      children,
      onKeyDown,
      css = {},
      onClose = () => {
        //
      },
      onOpenChange = () => {
        //
      },
      ...delegated
    } = props

    const dropdownRef = useDOMRef<HTMLDivElement>(ref)

    // Pick child element from children props
    const {child: DropdownMenuToggleElement} = pickChild<
      typeof DropdownMenuToggle
    >(children, DropdownMenuToggle)

    const {child: DropdownMenuMenuElement} = pickChild<typeof DropdownMenuMenu>(
      children,
      DropdownMenuMenu,
    )

    const [open, setOpen] = useState(false)
    const [itemIds, setItemIds] = useState<string[]>([])
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const refs = useRef<Array<React.RefObject<HTMLLIElement>>>([])

    const contextValue = React.useMemo(
      () => ({
        open,
        setOpen,
        itemIds,
        setItemIds,
        refs,
        onClose,
        onOpenChange,
      }),
      [open, setOpen, itemIds, setItemIds, onClose, onOpenChange],
    )

    const handleClosePopover = useCallback(() => {
      setOpen(false)
      onOpenChange?.(false)
      onClose?.()
    }, [])

    useEffect(() => {
      if (!open) {
        refs.current = []
        setSelectedIndex(-1)
      }
    }, [open])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event)
      if (open) {
        switch (event.key) {
          case 'ArrowRight':
            console.log(refs.current[selectedIndex])
            break
          case 'ArrowUp':
            event.preventDefault()
            if (refs.current) {
              if (selectedIndex === 0 || selectedIndex === -1) {
                setSelectedIndex(refs.current.length - 1)
                refs.current[refs.current.length - 1]?.current?.focus()
              } else {
                setSelectedIndex(selectedIndex - 1)
                refs.current[selectedIndex - 1]?.current?.focus()
              }
            }
            break
          case 'ArrowDown':
            event.preventDefault()
            if (refs.current) {
              if (
                selectedIndex === -1 ||
                selectedIndex === refs.current.length - 1
              ) {
                setSelectedIndex(0)
                refs.current[0]?.current?.focus()
              } else {
                setSelectedIndex(selectedIndex + 1)
                refs.current[selectedIndex + 1]?.current?.focus()
              }
            }
            break
          case 'Enter':
            event.preventDefault()
            refs.current[selectedIndex]?.current?.click()
            break
          case 'Escape':
          case 'Tab':
            setOpen(false)
            onOpenChange?.(false)
            onClose?.()
            break
        }
      }
    }

    return (
      <StyledDropdownMenu
        ref={dropdownRef}
        onKeyDown={handleKeyDown}
        css={css}
        role='menu'
        aria-labelledby={props['aria-labelledby']}
        {...delegated}
      >
        <DropdownMenuContext.Provider value={contextValue}>
          <Popover
            isOpen={open}
            anchor={DropdownMenuToggleElement}
            direction='bottom-left'
            onClose={handleClosePopover}
          >
            {DropdownMenuMenuElement}
          </Popover>
        </DropdownMenuContext.Provider>
      </StyledDropdownMenu>
    )
  },
)

export default DropdownMenu as typeof DropdownMenu & {
  Toggle: typeof DropdownMenuToggle
  Item: typeof DropdownMenuItem
  Submenu: typeof DropdownMenuSubmenu
  Menu: typeof DropdownMenuMenu
}
