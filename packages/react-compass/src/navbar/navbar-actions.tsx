import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/navbar-actions.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
  alternativeElement?: React.ReactNode
}

export type NavbarActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const NavbarActions = React.forwardRef<HTMLDivElement, NavbarActionsProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      alternativeElement,
      className,
      ...delegated
    } = props

    const rootClasses = [styles.navbarActions, className, 'cdg-navbar-actions']
      .filter(Boolean)
      .join(' ')

    const defaultClasses = [
      styles.defaultNavbarActions,
      !!alternativeElement && `${styles.hasAlternative} cdg-na-has-alternative`,
      'cdg-navbar-actions-default',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div className={rootClasses} ref={ref} {...delegated}>
          <div className={defaultClasses}>{children}</div>
          {alternativeElement ? (
            <div
              className={`${styles.alternativeNavbarActions} cdg-navbar-actions-alternative`}
            >
              {alternativeElement}
            </div>
          ) : (
            <></>
          )}
        </div>
      </CssInjection>
    )
  },
)

export default NavbarActions
