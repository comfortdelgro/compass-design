import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/breadscrumbs-item.module.css'

interface Props {
  css?: unknown
  href?: string
  target?: string
  isCurrent?: boolean
  isDisabled?: boolean
  children?: React.ReactNode
}

export type BreadcrumbItemProps = Props &
  Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  (props, ref) => {
    const {
      href,
      target,
      children,
      css = {},
      isCurrent = false,
      isDisabled = false,
      ...delegated
    } = props

    const linkRef = useDOMRef<HTMLAnchorElement>(ref)

    const className = `${styles['cdg-breadcrumbs-item']} ${
      isCurrent ? styles.active : ''
    } ${isDisabled ? styles.disabled : ''}`

    return (
      <CssInjection css={css} childrenRef={linkRef}>
        <li>
          {isCurrent || isDisabled ? (
            <span {...delegated} className={className} ref={linkRef}>
              {children}
            </span>
          ) : (
            <a
              {...delegated}
              href={href}
              ref={linkRef}
              target={target}
              className={className}
            >
              {children}
            </a>
          )}
        </li>
      </CssInjection>
    )
  },
)

export default BreadcrumbItem
