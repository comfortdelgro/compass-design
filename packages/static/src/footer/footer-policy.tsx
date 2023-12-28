import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/footer-policy.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
}

export type FooterPolicyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterPolicy = React.forwardRef<HTMLDivElement, FooterPolicyProps>(
  (props, ref) => {
    const {children, css = {}, className, ...delegated} = props

    const rootClasses = [styles.footerPolicy, className, 'cdg-footer-policy']
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

export default FooterPolicy
