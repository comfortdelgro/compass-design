import React from 'react'
import FooterHeader from './footer-header'
import FooterNavigation from './footer-nav'
import FooterPolicy from './footer-policy'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/footer.module.css'
import clsx from 'clsx'
interface Props {
  css?: unknown
  children?: React.ReactNode
  color?: 'white' | 'black' | 'blue'
}

export type FooterProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const { children, color = 'white', className, css = {}, ...delegated } = props
  return (
    <CssInjection css={css} childrenRef={ref}>
      
      <div className={clsx(styles.footer, styles[color], className)} ref={ref} color={color} {...delegated}>
        {children}
      </div>
    </CssInjection>
  )
})

export default Footer as typeof Footer & {
  Header: typeof FooterHeader
  Nav: typeof FooterNavigation
  Policy: typeof FooterPolicy
}
