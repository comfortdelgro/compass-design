import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/navbar.module.css'

interface Props {
  css?: unknown
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
        return <h1 className={styles.navbarBrandTitle}>{children}</h1>
      }
      return children
    }

    const rootClasses = [
      styles.navbarBrand,
      hiddenOnMobile && styles.hiddenOnMobile,
      className,
      'cdg-navbar-brand',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div className={rootClasses} ref={ref} {...delegated}>
          {renderChildren()}
        </div>
      </CssInjection>
    )
  },
)

export default NavbarBrand
