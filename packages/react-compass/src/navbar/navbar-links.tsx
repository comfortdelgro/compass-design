import React, {PropsWithChildren} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/navbar-links.module.css'

export type NavbarLinksProps = PropsWithChildren<
  {css?: unknown} & React.HTMLAttributes<HTMLUListElement>
>

export const NavbarLinks = React.forwardRef<HTMLUListElement, NavbarLinksProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    const listOfChildren = React.Children.toArray(children)

    return (
      <CssInjection css={css} childrenRef={ref}>
        <ul className={styles.navbarLinks} ref={ref} {...delegated}>
          {listOfChildren.map((child, index) => {
            return <li key={index}>{child}</li>
          })}
        </ul>
      </CssInjection>
    )
  },
)
