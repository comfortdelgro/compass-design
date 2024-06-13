import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/navbar.module.css'

interface Props {
  css?: CSS
  children?: React.ReactNode
  hiddenOnMobile?: boolean
}

export type NavbarBrandProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
  (props, ref) => {
    const {
      // ComponentProps
      children,
      className = '',
      // StyledComponentProps
      css = {},
      hiddenOnMobile = false,
      // HTMLDiv props
      ...delegated
    } = props

    // Render children as h1 tag if it's a string
    const renderChildren = () => {
      if (typeof children === 'string') {
        return (
          <h1
            className={classNames(
              styles.navbarBrandTitle,
              'cdg-navbar-brand-title',
            )}
          >
            {children}
          </h1>
        )
      }
      return children
    }

    const rootClasses = classNames(
      styles.navbarBrand,
      hiddenOnMobile && styles.hiddenOnMobile,
      className,
      'cdg-navbar-brand',
    )

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div {...delegated} className={rootClasses} ref={ref}>
          {renderChildren()}
        </div>
      </CssInjection>
    )
  },
)

export default NavbarBrand
