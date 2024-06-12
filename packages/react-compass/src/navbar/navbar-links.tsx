import React, {PropsWithChildren} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/navbar-links.module.css'

export type NavbarLinksProps = PropsWithChildren<
  {css?: CSS} & React.HTMLAttributes<HTMLUListElement>
>

export const NavbarLinks = React.forwardRef<HTMLUListElement, NavbarLinksProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    const listOfChildren = React.Children.toArray(children)

    return (
      <CssInjection css={css} childrenRef={ref}>
        <ul
          {...delegated}
          ref={ref}
          className={classNames(styles.navbarLinks, 'cdg-navbar-link')}
        >
          {listOfChildren.map((child, index) => {
            return <li key={index}>{child}</li>
          })}
        </ul>
      </CssInjection>
    )
  },
)
