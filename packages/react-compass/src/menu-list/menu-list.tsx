import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/menu-list.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
}

export type MenuListProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MenuList = React.forwardRef<HTMLDivElement, MenuListProps>(
  (props, ref) => {
    const {
      // ComponentProps
      children,
      className = '',
      // StyledComponentProps
      css = {},
      // HTML Div props
      ...delegated
    } = props

    const rootClasses = [styles.menuList, className, 'cdg-menu-list']
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div className={rootClasses} ref={ref} {...delegated}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default MenuList
