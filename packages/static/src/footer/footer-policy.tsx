import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import clsx from 'clsx'
import styles from './styles/footer-policy.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
}

export type FooterPolicyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterPolicy = React.forwardRef<HTMLDivElement, FooterPolicyProps>(
  (props, ref) => {
    const { children, css = {}, className, ...delegated } = props
    return (
      <CssInjection css={css} childrenRef={ref}>
        <div className={clsx(styles.footerPolicy, className)} ref={ref} {...delegated}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default FooterPolicy
