import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/navbar-actions.module.css'
import clsx from 'clsx'

interface Props {
  css?: unknown
  children?: React.ReactNode
  alternativeElement?: React.ReactNode
}

export type NavbarActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const NavbarActions = React.forwardRef<HTMLDivElement, NavbarActionsProps>(
  (props, ref) => {
    const { children, css = {}, alternativeElement, className, ...delegated } = props
    return (
      <CssInjection css={css} childrenRef={ref}>
        <div className={clsx(styles.navbarActions, className)} ref={ref} {...delegated}>
          <div
            className={clsx({
              'default-navbar-actions': true,
              [styles.defaultNavbarActions]: true,
              [styles.hasAlternative]: !!alternativeElement,
              'has-alternative': !!alternativeElement
            })}
          >
            {children}
          </div>
          {alternativeElement ? (
            <div className={clsx('alternative-navbar-actions', styles.alternativeNavbarActions)}>{alternativeElement}</div>
          ) : (
            <></>
          )}
        </div>
      </CssInjection>
    )
  },
)

export default NavbarActions
