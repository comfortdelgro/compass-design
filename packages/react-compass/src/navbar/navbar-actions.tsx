import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/navbar-actions.module.css'

interface Props {
  css?: CSS
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

    const rootClasses = classNames(
      styles.navbarActions,
      className,
      'cdg-navbar-actions',
    )

    const defaultClasses = classNames(
      styles.defaultNavbarActions,
      !!alternativeElement && `${styles.hasAlternative} cdg-na-has-alternative`,
      'cdg-navbar-actions-default',
    )

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div className={rootClasses} ref={ref} {...delegated}>
          <div className={defaultClasses}>{children}</div>
          {alternativeElement ? (
            <div
              className={classNames(
                styles.alternativeNavbarActions,
                'cdg-navbar-actions-alternative',
              )}
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
