import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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

    const rootClasses = classNames(
      styles.footerPolicy,
      className,
      'cdg-footer-policy',
    )

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div {...delegated} className={rootClasses} ref={ref}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default FooterPolicy
