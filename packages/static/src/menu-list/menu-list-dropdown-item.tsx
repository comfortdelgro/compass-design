import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import clsx from 'clsx'
import styles from './styles/menu-list-dropdown-item.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
  isActive?: boolean
  icon?: React.ReactNode
  isNested?: boolean
  isDisabled?: boolean
}

export type MenuListDropdownItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MenuListDropdownItem = React.forwardRef<
  HTMLDivElement,
  MenuListDropdownItemProps
>((props, ref) => {
  const {
    // ComponentProps
    children,
    isActive,
    isNested,
    isDisabled,
    icon,
    className = '',
    // StyledComponentProps
    css = {},
    // HTML Div props
    ...delegated
  } = props

  const tabIndex = isDisabled || isNested ? -1 : 0

  return (
    <CssInjection
      css={css}
      childrenRef={ref}
    >
      <div
        // className={`${className} menu-list-dropdown-item`}
        className={clsx({
          [styles.menuListDropdownItem]: true,
          [styles.nested]: isNested,
          [styles.active]: isActive,
          [styles.disabled]: isDisabled, className
        })}
        ref={ref}
        tabIndex={tabIndex}
        {...delegated}
      >
        {icon ? <div className={clsx(styles.cdgMenuListDropdownIcon, `cdg-menu-list-dropdown-icon`)}>{icon}</div> : <></>}
        {children}
      </div>
    </CssInjection>
  )
})

export default MenuListDropdownItem
