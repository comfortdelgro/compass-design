import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/menu-list.module.css'

interface Props {
  css?: CSS
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

    const rootClasses = classNames(styles.menuList, className, 'cdg-menu-list')
    return (
      <CssInjection css={css} childrenRef={ref}>
        <div {...delegated} className={rootClasses} ref={ref}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default MenuList
