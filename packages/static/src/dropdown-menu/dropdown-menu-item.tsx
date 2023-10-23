'use client'
import React, {useCallback, useContext, useEffect, useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMenuContext from './dropdown-menu-context'
import {MULTILEVEL_MENU_CLASS_NAME} from './dropdown-menu-menu'
import DropdownMenuSubmenu, {
  MULTILEVEL_SUBMENU_CLASS_NAME,
} from './dropdown-menu-submenu'
import styles from './styles/dropdown-menu.module.css'

interface Props {
  children?: React.ReactNode
  isDisabled?: boolean
  isActived?: boolean
  eventKey?: string
  onSelect?: (event: React.MouseEvent<HTMLLIElement>, eventKey?: string) => void
  css?: unknown
}
export const MULTILEVEL_ITEM_CLASS_NAME = 'cdg-dropdown-multilevel-item'

const ArrowRightIcon = () => (
  <svg
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`${styles.arrowRightIcon} cdg-arrow-right-icon`}
  >
    <path
      d='M5.14268 15.5C4.85025 15.5 4.55768 15.3861 4.33482 15.1582C3.88839 14.7025 3.88839 13.9643 4.33482 13.5086L9.24268 8.50046L4.33482 3.49141C3.88839 3.03571 3.88839 2.29747 4.33482 1.84177C4.78125 1.38608 5.50446 1.38608 5.95089 1.84177L11.6652 7.67473C12.1116 8.13043 12.1116 8.86866 11.6652 9.32436L5.95089 15.1573C5.72768 15.387 5.43518 15.5 5.14268 15.5Z'
      fill='currentColor'
    />
  </svg>
)

const getFirstItem = (dropdownMenu: HTMLUListElement) => {
  if (dropdownMenu.children.length === 0) {
    return null
  }
  for (let index = 0; index < dropdownMenu.children.length; index++) {
    const menuItem = dropdownMenu.children.item(index)
    if (menuItem?.classList.contains(MULTILEVEL_ITEM_CLASS_NAME)) {
      return menuItem as HTMLLIElement
    }
  }
  return null
}

const getLastItem = (dropdownMenu: HTMLUListElement) => {
  if (dropdownMenu.children.length === 0) {
    return null
  }
  for (let index = dropdownMenu.children.length - 1; index > 0; index--) {
    const menuItem = dropdownMenu.children.item(index)
    if (menuItem?.classList.contains(MULTILEVEL_ITEM_CLASS_NAME)) {
      return menuItem as HTMLLIElement
    }
  }
  return null
}

const getNextSibling = (
  dropdownMenuItem: HTMLLIElement | null,
): HTMLLIElement | null => {
  const nextElement = dropdownMenuItem?.nextElementSibling as HTMLLIElement
  if (!dropdownMenuItem) {
    return null
  }
  if (!nextElement) {
    return getFirstItem(dropdownMenuItem.parentElement as HTMLUListElement)
  }
  if (nextElement.getAttribute('aria-disabled') === 'true') {
    return getNextSibling(nextElement)
  }

  return nextElement
}

const getPrevSibling = (
  dropdownMenuItem: HTMLLIElement | null,
): HTMLLIElement | null => {
  const prevElement = dropdownMenuItem?.previousElementSibling as HTMLLIElement
  if (!dropdownMenuItem) {
    return null
  }
  if (!prevElement) {
    return getLastItem(dropdownMenuItem.parentElement as HTMLUListElement)
  }
  if (prevElement.getAttribute('aria-disabled') === 'true') {
    return getPrevSibling(prevElement)
  }

  return prevElement
}

export type DropdownMenuItemProps = Props &
  Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props>

const DropdownMenuItem = React.forwardRef<HTMLLIElement, DropdownMenuItemProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      className,
      isDisabled = false,
      isActived = false,
      eventKey,
      onClick,
      onSelect,
      onBlur,
      onFocus,
      ...delegated
    } = props

    const [focusing, setFocusing] = useState(false)

    const {child: subMenuChild} = pickChild<typeof DropdownMenuSubmenu>(
      children,
      DropdownMenuSubmenu,
    )
    const dropdownMenuItemRef = useDOMRef<HTMLLIElement>(ref)

    const {refs} = useContext(DropdownMenuContext)

    useEffect(() => {
      if (refs?.current) {
        // First level menu
        if (
          dropdownMenuItemRef.current?.parentElement?.className.includes(
            MULTILEVEL_MENU_CLASS_NAME,
          ) &&
          !isDisabled
        ) {
          refs.current.push(dropdownMenuItemRef)
        }
      }
    }, [dropdownMenuItemRef, isDisabled, refs])

    const handleItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
      if (!isDisabled) {
        event.stopPropagation()
        onClick?.(event)
        onSelect?.(event, eventKey)
      }
    }

    const handleDropdownMenuItemKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLLIElement>) => {
        if (focusing) {
          let dropdownSubMenu: HTMLUListElement | null = null
          let nextDropdownMenuItem: HTMLLIElement | null = null
          switch (event.key) {
            case 'ArrowRight':
              event.stopPropagation()
              event.preventDefault()
              dropdownSubMenu = dropdownMenuItemRef.current?.querySelector(
                `.${MULTILEVEL_SUBMENU_CLASS_NAME}`,
              ) as HTMLUListElement
              // Check if item contains Submenu
              if (dropdownSubMenu) {
                dropdownSubMenu.style.display = 'block'
                const dropdownMenuItemChild = dropdownSubMenu?.querySelector(
                  `.${MULTILEVEL_ITEM_CLASS_NAME}`,
                ) as HTMLLIElement
                // Get and focus first Item
                if (dropdownMenuItemChild) {
                  setTimeout(() => {
                    dropdownMenuItemChild.focus()
                  }, 0)
                }
              }
              break
            case 'ArrowLeft':
              event.stopPropagation()
              event.preventDefault()
              if (
                dropdownMenuItemRef.current?.parentElement?.className.includes(
                  MULTILEVEL_MENU_CLASS_NAME,
                )
              ) {
                return
              }

              dropdownSubMenu = dropdownMenuItemRef.current
                ?.parentElement as HTMLUListElement
              // Check parent is Submenu
              if (
                dropdownSubMenu &&
                dropdownSubMenu.classList.contains(
                  MULTILEVEL_SUBMENU_CLASS_NAME,
                )
              ) {
                // Close Submenu
                dropdownSubMenu.style.display = 'none'
                const dropdownMenuItemChild =
                  dropdownSubMenu.parentElement as HTMLLIElement
                // Check parent is Item
                if (
                  dropdownMenuItemChild &&
                  dropdownMenuItemChild.classList.contains(
                    MULTILEVEL_ITEM_CLASS_NAME,
                  )
                ) {
                  setTimeout(() => {
                    dropdownMenuItemChild.focus()
                  }, 0)
                }
              }
              break
            case 'ArrowUp':
              event.stopPropagation()
              event.preventDefault()
              nextDropdownMenuItem = getPrevSibling(dropdownMenuItemRef.current)
              nextDropdownMenuItem?.focus()
              break
            case 'ArrowDown':
              event.stopPropagation()
              event.preventDefault()
              nextDropdownMenuItem = getNextSibling(dropdownMenuItemRef.current)

              nextDropdownMenuItem?.focus()
              break
            case 'Enter':
              event.stopPropagation()
              event.preventDefault()
              dropdownMenuItemRef.current?.click()
              break

            default:
              break
          }
        }
      },
      [focusing, dropdownMenuItemRef],
    )

    const handleFocusItem = useCallback(
      (event: React.FocusEvent<HTMLLIElement>) => {
        onFocus?.(event)
        setFocusing(true)
      },
      [onFocus],
    )

    const handleBlurItem = useCallback(
      (event: React.FocusEvent<HTMLLIElement>) => {
        onBlur?.(event)
        setFocusing(false)
      },
      [onBlur],
    )

    return (
      <CssInjection css={css} childrenRef={dropdownMenuItemRef}>
        <li
          ref={dropdownMenuItemRef}
          className={`${MULTILEVEL_ITEM_CLASS_NAME} ${className ?? ''} ${
            styles.dropdownMenuItem
          } ${isDisabled ? styles.isDisabled : ''} ${
            isActived ? styles.isActived : ''
          }`}
          tabIndex={-1}
          role={subMenuChild ? 'none presentation' : 'menuitem'}
          aria-haspopup={!!subMenuChild}
          aria-disabled={isDisabled}
          onClick={handleItemClick}
          onKeyDown={handleDropdownMenuItemKeyDown}
          onFocus={handleFocusItem}
          onBlur={handleBlurItem}
          {...delegated}
        >
          {children}
          {!!subMenuChild && <ArrowRightIcon />}
        </li>
      </CssInjection>
    )
  },
)

export default DropdownMenuItem
