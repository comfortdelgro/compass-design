'use client'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dropdown-menu.module.css'

interface MenuProps {
  children?: React.ReactNode
  css?: unknown
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
    <CssInjection css={css} childrenRef={DropdownMenuMenuRef}>
      <ul
        ref={DropdownMenuMenuRef}
        className={`${className ?? ''} ${MULTILEVEL_MENU_CLASS_NAME} ${
          styles.dropdownMenuBoxshadow
        }`}
        {...delegated}
      >
        {children}
      </ul>
    </CssInjection>
  )
})

export default DropdownMenuMenu
