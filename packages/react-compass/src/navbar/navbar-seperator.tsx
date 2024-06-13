import React, {PropsWithChildren} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/navbar-seperator.module.css'

export type NavbarSeperatorProps = PropsWithChildren<
  {css?: CSS} & React.HTMLAttributes<HTMLDivElement>
>

export const NavbarSeperator = React.forwardRef<
  HTMLDivElement,
  NavbarSeperatorProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  return (
    <CssInjection css={css} childrenRef={ref}>
      <div
        {...delegated}
        ref={ref}
        className={classNames(styles.navbarSeperator, 'cdg-navbar-seperator')}
      >
        {children}
      </div>
    </CssInjection>
  )
})
