import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/footer-header.module.css'

interface Props {
  css?: CSS
  children?: React.ReactNode
}

export type FooterHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterHeader = React.forwardRef<HTMLDivElement, FooterHeaderProps>(
  (props, ref) => {
    const {children, className, css = {}, ...delegated} = props

    const rootClasses = classNames(
      styles.footerHeader,
      className,
      'cdg-footer-header',
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

export default FooterHeader
