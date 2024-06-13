'use client'
import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dropdown-menu.module.css'

interface SubmenuProps {
  children?: React.ReactNode
  'aria-labelledby'?: string
  css?: CSS
}
export const MULTILEVEL_SUBMENU_CLASS_NAME = 'cdg-dropdown-multilevel-submenu'

export type DropdownMenuSubmenuProps = SubmenuProps &
  Omit<React.HTMLAttributes<HTMLUListElement>, keyof SubmenuProps>

const DropdownMenuSubmenu = React.forwardRef<
  HTMLUListElement,
  DropdownMenuSubmenuProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props
  const DropdownMenuSubmenuRef = useDOMRef<HTMLUListElement>(ref)

  return (
    <CssInjection css={css} childrenRef={DropdownMenuSubmenuRef}>
      <ul
        {...delegated}
        role='menu'
        ref={DropdownMenuSubmenuRef}
        aria-labelledby={props['aria-labelledby']}
        className={classNames(
          styles.dropdownMenuBoxshadow,
          styles.dropdownMenuSubmenu,
          className,
          MULTILEVEL_SUBMENU_CLASS_NAME,
        )}
      >
        {children}
      </ul>
    </CssInjection>
  )
})

export default DropdownMenuSubmenu
