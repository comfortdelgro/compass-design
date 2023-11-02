import clsx from 'clsx'
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
    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          className={clsx(styles.footerHeader, className)}
          ref={ref}
          {...delegated}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default FooterHeader
