import React, {PropsWithChildren} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/navbar-seperator.module.css'

export type NavbarSeperatorProps = PropsWithChildren<
  {css?: unknown} & React.HTMLAttributes<HTMLDivElement>
>

export const NavbarSeperator = React.forwardRef<
  HTMLDivElement,
  NavbarSeperatorProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  return (
    <CssInjection css={css} childrenRef={ref}>
      <div className={styles.navbarSeperator} ref={ref} {...delegated}>
        {children}
      </div>
    </CssInjection>
  )
})
