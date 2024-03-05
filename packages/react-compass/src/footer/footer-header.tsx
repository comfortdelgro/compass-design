import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/footer-header.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
}

export type FooterHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterHeader = React.forwardRef<HTMLDivElement, FooterHeaderProps>(
  (props, ref) => {
    const {children, className, css = {}, ...delegated} = props

    const rootClasses = [styles.footerHeader, className, 'cdg-footer-header']
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div className={rootClasses} ref={ref} {...delegated}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default FooterHeader
