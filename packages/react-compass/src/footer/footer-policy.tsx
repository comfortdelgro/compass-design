import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import styles from './styles/footer-policy.module.css'

interface Props {
  css?: CSS
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
