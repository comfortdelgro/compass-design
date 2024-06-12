/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import FooterHeader from './footer-header'
import FooterNavigation from './footer-nav'
import FooterPolicy from './footer-policy'
import styles from './styles/footer.module.css'
interface Props {
  css?: CSS
  children?: React.ReactNode
  color?: 'white' | 'black' | 'blue'
}

export type FooterProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const {children, color = 'white', className, css = {}, ...delegated} = props

  const rootClasses = classNames(
    styles.footer,
    styles[color],
    className,
    'cdg-footer',
  )

  return (
    <CssInjection css={css} childrenRef={ref}>
      <div {...delegated} className={rootClasses} ref={ref} color={color}>
        {children}
      </div>
    </CssInjection>
  )
}) as typeof Footer & {
  Header: typeof FooterHeader
  Nav: typeof FooterNavigation
  Policy: typeof FooterPolicy
}

export default Footer
